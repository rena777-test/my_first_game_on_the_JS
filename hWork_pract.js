window.onload = init;
function init() {
    let doctorDiv = document.getElementById("doctor");
    let coughDiv = document.getElementById("cough");
    let runnyNoseDiv = document.getElementById("runnyNose");
    let feverDiv = document.getElementById("fever");
    let pharmDiv = document.getElementById("pharm");
    let characterD = document.getElementById("character");
    let virusDiv = document.getElementById("virus");

    coughDiv.onclick = buttle();
    runnyNoseDiv.onclick = buttle();
    feverDiv.onclick = buttle();
    pharmDiv.onclick = shop();
    characterD.onclick = show();
    virusDiv.onclick = buttle(); 
    console.log(doctorDiv);
    console.log(coughDiv);
    console.log(runnyNoseDiv);
    console.log(feverDiv);
    console.log(pharmDiv);
    console.log(characterD);
    console.log(virusDiv);
}
