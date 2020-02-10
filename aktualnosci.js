//zmienne z trescia do postow
const akt = document.querySelector('.mid');
const date = new Date()
let title = "Wybrano pracownika miesiąca";
const title2 = "Dzień mechanika w naszym warsztacie";
const title3 = "Nasza firma została wyróżniona w krajowym konkursie warsztatów";
const title4 = "Nowy pracownik";
const title5 = "Gwarancja do bramy i sie nie znamy";
const title6 = "U siebie rób jak u siebie...";
const title7 = "Zostaliśmy jednym ze sponsorów lokalnej drużyny piłkarskiej";
const title8 = "Zaskakująca informacja";
const tresc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const more = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
const place = "Kraków";
let foto = "https://blog.prochoice.com.au/wp-content/uploads/2018/11/Mechanic-safety.jpg";
const foto2 = "https://www.autotrainingcentre.com/wp-content/uploads/2015/06/automotive-service-advisor.png";
const foto3 = "https://media.angieslist.com/s3fs-public/styles/widescreen_large/s3/s3fs-public/automechanic.jpg?itok=8f3JLqZ0";
const foto4 = "https://careergirlsorg-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Automotive_Mechanic_1920x1080.jpg";
const foto5 = "https://images.wheels.ca/wp-content/uploads/2015/05/mechanic.jpg";
const foto6 = "https://ix-cdn.brightedge.com/images/19401/19401_fc5111750c714aaca0ea6759365aa31d_1534365375.jpeg";
const foto7 = "https://media.ed.edmunds-media.com/non-make/fe/fe_1115161_717.jpg";
const foto8 = "https://postmediadriving.files.wordpress.com/2018/11/corner-wrench-online.jpg?quality=80&strip=all&w=580&h=370&crop=1";
const foto9 = "https://www.fleetcleanusa.com/wp-content/uploads/2013/03/yourmechanic.jpg";
const foto10 = "https://i.pinimg.com/originals/3f/38/1c/3f381c47cfa10147573b85cfa9eefe87.jpg";

//losowanie zdjecia i tytulu do dodatkowych wpisow
const fotoAll = [foto,foto2,foto3,foto4,foto5,foto6,foto7,foto8,foto9,foto10];
const titleAll = [title,title2,title3,title4,title5,title6,title7,title8];
let fotoToUse;
let titleToUse;
function randomImage(){
    fotoToUse = fotoAll[Math.floor(Math.random() * fotoAll.length)];
    foto=fotoToUse;
};
function randomTitle(){
    titleToUse = titleAll[Math.floor(Math.random() * titleAll.length)];
    title=titleToUse;
};
randomImage();
randomTitle();

const header = "Aktualności";
const naglowek = `
            <div class="naglowek d-flex justify-content-center w-100 h1 mt-2 text-white">
                ${header}
            </div>
           `;
const button = `<div class="wiecej float-right mx-3 mb-3 ">
                <button type="button" class="btn btn-dark">Wyświetl starszy post</button>
              </div>
              `;

// wyswietlenie posta po wczytaniu
(function () {
    akt.innerHTML = naglowek+button;
})();


// przycisk dodajacy wiecej wpisow
// kazdy dodany wpis ma inny obraz, tutul oraz jest starszy o jeden dzien od poprzednika
const naglowekClass = document.querySelector('.naglowek')
const wiecej = document.querySelectorAll('.wiecej');
let older = date.getDate();
window.onload = function(){
    wiecej[0].click();
}
for(let i=0;i<wiecej.length;i++)
{
    wiecej[i].addEventListener("click", function(){
        older = --older;
        randomImage();
        randomTitle();
        akt.scrollIntoView();
        naglowekClass.insertAdjacentHTML('afterend', `     
                                                        <div class="akt container px-4 py-4 mx-auto my-4 nowy">
                                                            <div class="wpis row">
                                                                <div class="foto col pb-4 d-flex justify-content-center" >
                                                                    <img class ="doWpisu my-auto img-thumbnail" src="${foto}">
                                                                </div>
                                                                <div class="opis col px-2 py-4 mr-4">
                                                                    <div class ="title h5 font-weight-bold text-center">
                                                                        ${title}
                                                                    </div>
                                                                    <div class ="tresc px-3 py-3 text-justify float-left">
                                                                        <hr>
                                                                        ${tresc}
                                                                        <span class="more"><br><u>Czytaj więcej</u></span>
                                                                        <span class="moreContent"><br>${more}</span>
                                                                        <span class="less"><u>Czytaj mniej</u></span>
                                                                        <hr>
                                                                    </div>
                                                                    <div class="data px-3">
                                                                        <hr>
                                                                        ${older}.${date.getMonth()+1}.${date.getFullYear()}r. <br>
                                                                        ${place}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      `);
        //przycisk czytaj wiecej
        const readMore = document.querySelectorAll('.more');
        const moreContent = document.querySelectorAll('.moreContent');
        const readLess = document.querySelectorAll('.less');
        
        for(let j=0;j<readMore.length;j++)
        {
            readMore[j].addEventListener("click", function(){
                readMore[j].style.display="none";
                moreContent[j].style.display="block";
                readLess[j].style.display="block";
            });
    
            //przycisk czytaj mniej
            readLess[j].addEventListener("click", function(){
                readMore[j].style.display="block";
                moreContent[j].style.display="none"
                readLess[j].style.display="none";
            });
        }
    });
}







