# COMMAND INSTRUCTIONS

## -> **ES:**
## Comando /open (Abrir Canal)
- **Descripción:** Este comando se utiliza para abrir un canal en un servidor de Discord.
- **Uso:** `/open [canal]`
- **Función:** Los usuarios con el rol "staff" pueden utilizar este comando para abrir un canal específico o el canal en el que se encuentran.
- **Características:**
  - Solo los usuarios con el rol "staff" pueden ejecutar este comando.
  - Si el canal ya está abierto, se mostrará un mensaje indicando que el canal ya está abierto.
  - El comando cambia los permisos del canal para permitir el envío de mensajes.

## Comando /close (Cerrar Canal)
- **Descripción:** Este comando se utiliza para cerrar un canal en un servidor de Discord.
- **Uso:** `/close [canal]` (el canal es opcional)
- **Función:** Los usuarios con el rol "staff" pueden utilizar este comando para cerrar un canal específico o el canal en el que se encuentran.
- **Características:**
  - Solo los usuarios con el rol "staff" pueden ejecutar este comando.
  - Si el canal ya está cerrado, se mostrará un mensaje indicando que el canal ya está cerrado.
  - El comando cambia los permisos del canal para no permitir el envío de mensajes.

    
## -> **ENG:**
## /open Command (Open Channel)
- **Description:** This command is used to open a channel in a Discord server.
- **Usage:** `/open [channel]`
- **Function:** Users with the "staff" role can use this command to open a specific channel or the channel they are in.
- **Features:**
  - Only users with the "staff" role can execute this command.
  - If the channel is already open, a message indicating that the channel is already open will be displayed.
  - The command changes the channel's permissions to allow message sending.

## /close Command (Close Channel)
- **Description:** This command is used to close a channel in a Discord server.
- **Usage:** `/close [channel]` (the channel is optional)
- **Function:** Users with the "staff" role can use this command to close a specific channel or the channel they are in.
- **Features:**
  - Only users with the "staff" role can execute this command.
  - If the channel is already closed, a message indicating that the channel is already closed will be displayed.
  - The command changes the channel's permissions to disallow message sending.

Ambos comandos utilizan Discord.js para interactuar con el servidor de Discord y realizan cambios en los permisos del canal para abrirlo o cerrarlo según corresponda. También proporcionan mensajes de respuesta para indicar el éxito de la operación o mostrar mensajes de error en caso de problemas. Estos comandos son útiles para administrar canales de Discord de manera eficiente.
