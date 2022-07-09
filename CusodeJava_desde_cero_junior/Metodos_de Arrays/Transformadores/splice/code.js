/* splice()
cambia el contonido del array elimindo y poniedo unos nuevos */

let nombres = ["pedro","maría","jose","miguel"]
document.write(nombres+"<br>");
let resultado = nombres.splice(0,4,"hugo","alicia","francisco","carmen");
document.write(nombres);