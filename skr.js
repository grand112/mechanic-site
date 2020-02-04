let navChild = document.querySelectorAll('.link');

for(let i=0;i<navChild.length;i++)
{
    navChild[i].addEventListener("mouseover", function (){
        navChild[i].style.color="white"
        navChild[i].style.textDecoration="none";
    });

    navChild[i].addEventListener("mouseleave", function (){
        navChild[i].style.color="grey"
    });
}


