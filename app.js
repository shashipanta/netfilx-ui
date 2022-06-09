var acordionHeader = document.querySelectorAll('.acordion__header');
var acordionBody = document.querySelectorAll('.acordion__body');
//
// add event listener
// for (i = 0; i < acordionHeader.length; i++) {
//     // add event listner to each acordion header
//  acordionHeader[i].addEventListener("click", function() {
//     // this.nextElementSibling.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     console.log(panel);
//     var closeBtn = this.lastElementChild;

//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//         // display close button
//         closeBtn.classList.toggle('close-btn');
//     } else {
//       panel.style.display = "block";
//         // display close button
//         closeBtn.classList.toggle('close-btn');
//     }
//   });
// }

for(i=0; i < acordionHeader.length; i++){
    acordionHeader[i].addEventListener("click", showAcordion);
}

var openAcordion = acordionHeader;
function showAcordion(){

    var panel = this.nextElementSibling;
    console.log(panel);
    var closeBtn = this.lastElementChild;

    // find other div with acordion open
    console.log(openAcordion);
    if (panel.style.display === "block") {
      panel.style.display = "none";
        // display close button
        closeBtn.classList.toggle('close-btn');
    } else {
      panel.style.display = "block";
        // display close button
        closeBtn.classList.toggle('close-btn');
    }
}

function toggleBody(i) {
    // console.log(e.Target);
    var acordionStyle = getComputedStyle(acordionBody[i]);
    console.log(acordionStyle);
    var isHidden = (acordionStyle.display == 'none') ? true : false;
    console.log(isHidden);
    // if hidden then display the body
    if (isHidden) {
        acordionBody[i].style.display = 'block';
    }
    else {
        console.log("Accordion is not hidden");
        acordionBody[i].style.display = 'none';
    }
}
