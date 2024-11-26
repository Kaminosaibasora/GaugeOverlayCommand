// ========================= Gestion CHAT =========================

let channel     = document.getElementById("channel").textContent;
let commandName = document.getElementById("command").textContent;
var valueCount  = 0;
drawCanva(ctx, valueMax, valueCount);

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( command == commandName ) {
        valueCount++;
        drawCanva(ctx, valueMax, valueCount);
    }
    if( command == commandName + '-' ) {
        valueCount--;
        drawCanva(ctx, valueMax, valueCount);
    }
  }

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log( user + ":", message );
    console.log(flags.mod + " - " + flags.broadcaster + " - " + flags.subscriber);
}
ComfyJS.Init( channel );
