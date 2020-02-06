// po najechaniu na element menu sie podswietla i gasnie
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

// przeladowanie strony po nacisnieciu logo lub opcji home w menu
let home = document.querySelectorAll(".home");
for(let i=0;i<home.length;i++)
{
    home[i].addEventListener("click", rel);
    function rel(){
    window.location.reload(true);
    }
}

// po wybaniu opcji kontakt lub oNas w menu strona przekierwoywuje nas do stopki
let kontakt = document.querySelector('.kontakt');
let oNas = document.querySelector('.oNas');
kontakt.addEventListener("click", toBottom);
oNas.addEventListener("click", toBottom);
function toBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}




