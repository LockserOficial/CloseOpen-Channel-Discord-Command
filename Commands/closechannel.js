const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    PermissionsBitField,
  } = require("discord.js");
  const { CommandCooldown, msToMinutes } = require("discord-command-cooldown");
  const config = require('./../config.json')
  const Discord = require('discord.js')
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('close')
      .setDescription('Cierra un canal')
      .addChannelOption(option =>
        option.setName('canal')
          .setDescription('El canal que quieres cerrar')
          .setRequired(false)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
  
      // STAFF ROLE
      const member = interaction.member;
      const staffRole = config.rolstaff;
  
      if (!member.roles.cache.has(staffRole)) {
        return interaction.reply({ content: '❌ ¡No tienes los permisos suficientes!', ephemeral: true });
      }
  
      let channel = interaction.options.getChannel('canal') || interaction.channel;
      const role = interaction.guild.roles.everyone;
  
      if (channel.permissionsFor(role).has(PermissionsBitField.Flags.SendMessages) === false) {
        return interaction.reply({ content: `El canal ${channel} ya está cerrado.`, ephemeral: true });
      }
  
      try {
      
        // CANT SEND MESSAGES
        await channel.permissionOverwrites.edit(role, {
          SendMessages: false
        });
  
        const successEmbed = new Discord.EmbedBuilder()
          .setColor(config.colorMain)
          .setDescription(`El canal ${channel} ha sido cerrado.`)
          .setFooter({ text: `Ejecutado por: ${member.user.tag}`, iconURL: member.user.displayAvatarURL() });
  
        await interaction.deleteReply(); 
  
        interaction.reply({ embeds: [successEmbed] });
  
      } catch (error) {
  
        const errorEmbed = new Discord.EmbedBuilder()
          .setColor('#ff0000')
          .setDescription(`¡Se ha producido un error: ${error.message}`)
          .setFooter({ text: `Ejecutado por: ${member.user.tag}`, iconURL: member.user.displayAvatarURL() });
  
        interaction.reply({ embeds: [errorEmbed] });
      }
  
    },
  };
  