let navChild = document.querySelectorAll('.link');

for(let i=0;i<navChild.length;i++)
{
    navChild[i].addEventListener("mouseover", function (){
        navChild[i].style.color="white";
        navChild[i].style.textDecoration="none";
    });

    navChild[i].addEventListener("mouseleave", function (){
        navChild[i].style.color="grey";
    });
}

let kontakt = document.querySelector('.kontakt');
let oNas = document.querySelector('.oNas');

kontakt.addEventListener("click", toBottom);
oNas.addEventListener("click", toBottom);

function toBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}




