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

let tryMe = document.querySelector('.btn');
let mid = document.querySelector('.mid');

tryMe.addEventListener('click', function(){
    mid.innerHTML=`<h2>To gowno zostalo wygenerowane z jsa</h2>`;
});



