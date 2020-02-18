// dane do galerii
const galeriaButton = document.querySelectorAll('.galeria');
const headerGalleria = "Galeria";
//tabela ze zdj
//divy generwane dynamicznie w zaleznosci od ilosci zdj w tablicy
//wystarczy dodac link do tablicy i strona zmieni sie dynamicznie
let img = [
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-mechanics-workshop-paul-freidlund.jpg",
        "https://www.cassarautomotive.com.au/wp-content/uploads/2019/01/new-cassar-automotive-mechanic-workshop-2-s-847x460.jpg",
        "https://www.envyautomotive.com.au/portals/0/WORKSHOP222.jpg?ver=2015-10-27-094617-470",
        "https://www.austinautomotive.com/wp-content/uploads/austin-automotive-shop-interior-1920x800_c.jpg",
        "https://decaturautorepairs.com/images/headers/slide1.jpg",
        "https://www.fenderbender.com/ext/resources/publication/2019/0919/FB_CaseStudy_0919_5.jpg?height=635&t=1567021606&width=1200",
        "https://i.pinimg.com/originals/64/76/1b/64761bc51267c0d6f35827c8d0af9d5c.jpg",
        "https://c1.staticflickr.com/4/3735/11343808444_7bf36d8abe_b.jpg",
        "https://pbs.twimg.com/media/D_CmQbFXoAAQjCZ.jpg:large",
        "https://gasmonkeygarage.com/wp-content/uploads/2019/07/IMG_7392-e1571088427798.jpg",
        "https://gasmonkeygarage.com/wp-content/uploads/2019/07/Josh-working.jpg",
        "https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54caa0df15d7e_-_pmgarageshot_400_0410-de.jpg"
];
//zmiana mida po wcisnieciu buttona galeria
for(let i=0;i<galeriaButton.length;i++)
{
        galeriaButton[i].addEventListener("click", function(){
                mid.innerHTML= `
                                <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
                                        ${headerGalleria}
                                </div>
                                `;

                // generowanie nowego diva dla kazdego zdj z tabeli w powiekszeniu.
                for(let j=0;j<img.length;j++)
                {
                        mid.insertAdjacentHTML('beforeend', `
                                                                <div class="bigFoto row d-flex justify-content-center">
                                                                        <img class="img-thumbnail imgBig${[j]}" src=${img[j]} alt=""></img>
                                                                </div>
                                                            `);
                }
                // dodawanie reszty zawartosci do mida
                mid.insertAdjacentHTML('beforeend',    
                                                        `
                                                        <div class="akt container px-4 py-4 my-4">
                                                                <div class="wpis d-flex justify-content-center">
                                                                        <div class="opis py-4 row miniatury">
                                                                                <div class="embed-responsive embed-responsive-16by9 col-11 mx-auto img-thumbnail">
                                                                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6n3pFFPSlW4" allowfullscreen></iframe>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        `);
            //generowanie dynamicznie miniatur w srodku diva miniatury w srodku mida
            let miniatury = document.querySelector('.miniatury');
            for(let y=0;y<img.length;y++)
            {
                miniatury.insertAdjacentHTML('afterbegin',`
                                                        <div class="col-lg-3 col-md-4 col-6 mb-4 d-block imgSmall${[y]} miniFoto">
                                                                <img class="img-thumbnail" src=${img[y]} alt="">
                                                        </div>
                                                   `);
            }
            
            //przewinięcie do mida przy kliknięciu na element o klasie galeria z menu
            akt.scrollIntoView();

            //powiekszanie zdj
            //utworzono 2 tablice z selektorami miniatur i zdj powiekszonych
            //po wcisnieciu miniatury wyswietlane jest zdj piwekszone zgodne z miniatura
            //po wcisnieciu innej miniatury zdj powiekszone zostaje podmienione
            let selectorsSmall = [];
            let selectorsBig = [];

            const bigFoto = document.querySelector('.bigFoto');
            for(let a=0;a<img.length;a++)
            {
                //dodawanie querySelectorow to tablic
                selectorsSmall.push(document.querySelector(`.imgSmall${[a]}`));
                selectorsBig.push(document.querySelector(`.imgBig${[a]}`));
                 
                // wszystkie zdj powiekszone sa chowane
                selectorsBig[a].style.display="none";
                        
                //obsluga klikniecia miniatury
                selectorsSmall[a].addEventListener("click", function(){
                        // wszystkie zdj powiekszone sa chowane
                        for(let b=0;b<img.length;b++)
                        {
                                selectorsBig[b].style.display="none";
                        }
                        // zostaje wyswietlone tylko to zdj powiekszone ktore jest zgodne z klikneta miniatura
                        selectorsBig[a].style.display="block";
                        //scroll automarycznie do powiekszonego zdj
                        bigFoto.scrollIntoView();
                });
            }
        });
}


