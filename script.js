/*document.addEventListener("keydown", function (e) {
    if (e.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (e.key) {
        case "A":
        case "a":
            console.log('The \'A\' key is pressed');
            let audioA = new Audio("./white_keys/A.mp3");
            audioA.play();
            break;
        case "S":
        case "s":
            console.log('The \'S\' key is pressed');
            let audioS = new Audio("./white_keys/S.mp3");
            audioS.play();
            break;
        case "D":
        case "d":
            console.log('The \'D\' key is pressed');
            let audioD = new Audio("./white_keys/D.mp3");
            audioD.play();
            break;
        case "F":
        case "f":
            console.log('The \'F\' key is pressed');
            let audioF = new Audio("./white_keys/F.mp3");
            audioF.play();
            break;
        case "G":
        case "g":
            console.log('The \'G\' key is pressed');
            let audioG = new Audio("./white_keys/G.mp3");
            audioG.play();
            break;
        case "H":
        case "h":
            console.log('The \'H\' key is pressed');
            let audioH = new Audio("./white_keys/H.mp3");
            audioH.play();
            break;
        case "J":
        case "j":
            console.log('The \'J\' key is pressed');
            let audioJ = new Audio("./white_keys/J.mp3");
            audioJ.play();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    e.preventDefault();
}, true);*/


let white_keys = "ASDFGHJ";
let black_keys = "WETYU";

document.addEventListener("keydown", e => {
    if (white_keys.includes(e.key.toUpperCase())) {
        console.log("The '" + e.key.toUpperCase() + "' key is pressed");
        let audio = new Audio(`./white_keys/${e.key.toUpperCase()}.mp3`);
        audio.play();}
    else if (black_keys.includes(e.key.toUpperCase())) {
        console.log("The '" + e.key.toUpperCase() + "' key is pressed");
        let audio = new Audio(`./black_keys/${e.key.toUpperCase()}.mp3`);
        audio.play();
    } else {
        console.log("The '" + e.key + "' key isn't a correct one");
    }
})
