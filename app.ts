let acordionHeader = document.querySelectorAll('.acordion__header');
let acordionBody = document.querySelectorAll('.acordion__body');

// add event listener

for(i=0; i < acordionHeader.length; i++){

    // add event listner to each acordion header
    console.log(i);
    // console.log(acordionHeader[i]);
    acordionHeader[i].addEventListener('click', (event) => {
        console.log(acordionHeader[i]);
    })
}


acordionHeader[0].addEventListener('click', (event) => {
    console.log("Hi");
})

function toggleBody(i){
    // console.log(e.Target);
    const acordionStyle = getComputedStyle(acordionBody[i]);
    console.log(acordionStyle);
    let isHidden = (acordionStyle.display == 'none')? true:false;
    console.log(isHidden);

    // if hidden then display the body
    if(isHidden){
        acordionBody[i].style.display = 'block';
    }else{
        console.log("Accordion is not hidden");
        acordionBody[i].style.display = 'none';
    }
}
