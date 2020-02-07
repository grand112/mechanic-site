//zmienne z trescia do postow
const akt = document.querySelector('.mid');
const date = new Date()
let title = "Wybrano pracownika miesiąca"
let tresc = "To powinno być skądś pobierane a nie, że se piszemy tak o w js wpisy. Nwm jescze jak to zrobić. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let more = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
let place = "Kraków";
let foto = "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/80215242_2662380393843989_3252685102420852736_n.jpg?_nc_cat=106&_nc_ohc=dLazPvANdREAX9T6BgF&_nc_ht=scontent-waw1-1.xx&oh=a76e5ccbc8ac375f44c7fb553370e6b7&oe=5EBB4568"
let header = "Aktualności";
const naglowek = `
            <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
                ${header}
            </div>
           `;
const content = `     
                    <div class="akt container px-4 py-4 mx-auto my-4">
                        <div class="wpis row">
                            <div class="foto col-md-4 mb-2 d-flex justify-content-center" >
                                <img class ="doWpisu" src="${foto}">
                            </div>
                            <div class="opis col-md-8 px-2 py-4 ">
                                <div class ="title h5 font-weight-bold text-center">
                                    ${title}
                                </div>
                                <div class ="tresc px-3 py-3 text-justify">
                                    <hr>
                                    ${tresc}
                                    <span class="more"><br><u>Czytaj więcej</u></span>
                                    <span class="moreContent"><br>${more}</span>
                                    <span class="less"><u>Czytaj mniej</u></span>
                                    <hr>
                                </div>
                                <div class="data px-3">
                                    <hr>
                                    ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}r. <br>
                                    ${place}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
const button = `<div class="wiecej float-right mx-3 mb-3 ">
                <button type="button" class="btn btn-dark">Wyświetl wiecej postów</button>
              </div>
              `;

// wyswietlenie posta po wczytaniu
(function () {
    akt.innerHTML = naglowek+content+button;
})();

// przycisk dodajacy wiecej wpisow
const wpis = document.querySelector('.akt');
const wiecej = document.querySelector('.wiecej');
wiecej.addEventListener("click", function(){
    wpis.insertAdjacentHTML('afterend', content)
});

//przycisk czytaj wiecej
const readMore = document.querySelector('.more');
const moreContent = document.querySelector('.moreContent');
const readLess = document.querySelector('.less');
readMore.addEventListener("click", function(){
    readMore.style.display="none";
    moreContent.style.display="block";
    readLess.style.display="block";
});

//przycisk czytaj mniej
readLess.addEventListener("click", function(){
    readMore.style.display="block";
    moreContent.style.display="none"
    readLess.style.display="none";
});