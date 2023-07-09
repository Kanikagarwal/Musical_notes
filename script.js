let numberOfButtons = document.querySelectorAll(".music").length;
for(i=0; i < numberOfButtons ;i++){
    document.querySelectorAll(".music")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        myFunc(buttonInnerHTML);
    }
    
    )}

document.addEventListener("keypress", function (event) {
    myFunc(event.key)
}

);

function myFunc(key){
    switch (key) {
        case "w":
            let audio1 = new Audio("sounds/do.mp3")
            audio1.play();
            break;
            case "a":
                let audio2 = new Audio("sounds/re.mp3")
                audio2.play();
                break;
                case "s":
                let audio3 = new Audio("sounds/mi.mp3")
                audio3.play();
                break;
                case "d":
                let audio4 = new Audio("sounds/fa.mp3")
                audio4.play();
                break;
                case "j":
                let audio5 = new Audio("sounds/so.mp3")
                audio5.play();
                break;
                case "k":
                let audio6 = new Audio("sounds/la.mp3")
                audio6.play();
                break;
                case "l":
                let audio7 = new Audio("sounds/ti.mp3")
                audio7.play();
                break;
}
}