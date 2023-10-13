const animationSizeInterval = 3;
const animationPosInetrval = 1.5;

function hoverCV() {
    document.getElementById("imgCV").src="afbeeldingen/icoon-cv-inverted.png";
}

function leaveCV() {
    document.getElementById("imgCV").src="afbeeldingen/icoon-cv.png";
}

function hoverErvaring() {
    document.getElementById("imgErvaring").src="afbeeldingen/icoon-ervaring-inverted.png";
}

function leaveErvaring() {
    document.getElementById("imgErvaring").src="afbeeldingen/icoon-ervaring.png";
}

function hoverHobbys() {
    document.getElementById("imgHobbys").src="afbeeldingen/icoon-hobbys-inverted.png";
}

function leaveHobbys() {
    document.getElementById("imgHobbys").src="afbeeldingen/icoon-hobbys.png";
}

function hoverContact() {
    document.getElementById("imgContact").src="afbeeldingen/icoon-contact-inverted.png";
}

function leaveContact() {
    document.getElementById("imgContact").src="afbeeldingen/icoon-contact.png";
}

function buttonLinkAnimation(element) {
    let id = null;
    const elem = document.getElementById(element);
    let pos = 49;
    let size = 2;
    clearInterval(id);
    elem.hidden = false;
    id = setInterval(frame, 5);
    function frame() {
      if (size >= 100) {
        elem.hidden = true;
        clearInterval(id);
      } else {
        pos -= animationPosInetrval;
        size += animationSizeInterval;
        elem.style.top = pos + "%"; 
        elem.style.left = pos + "%"; 
        elem.style.width = size + "%";
        elem.style.height = size + "%";
      }
    }
}

function stopAnimation(element) {
    const elem = document.getElementById(element);
    elem.hidden = true;
}