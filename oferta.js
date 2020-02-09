//zmienne do przetrzymywania tekstów na karty

let tekst1=`
Diagnostyka współczesnego samochodu polega na podłączeniu go do specjalnego komputera diagnostycznego do komputera pokładowego pojazdu w celu wymiany danych pomiędzy nimi. Tester diagnostyczny w ciągu zaledwie kilku minut odczytuje zapisane przez komputer pokładowy informacje o stanie auta i wyświetla te, które dotyczą wykrytych nieprawidłowości w funkcjonowaniu poszczególnych podzespołów. 
`;

let tekst2=`
Postępujemy zgodnie z zaleceniami producentów w zakresie wymiany części narażonych na eksploatację, chyba że element został uszkodzony przed terminem przewidywanej przez producenta wymiany. W takiej sytuacji wprowadzamy do pojazdu nowe, sprawne części. Przeprowadzana jest diagnostyka oraz naprawa nowoczesnych układów hamulcowych, uwzględniająca także działania w zakresie elektrycznych hamulców postojowych.
`
let tekst3=`
Typowe bolączki niesprawnego układu zapłonowego w pojazdach z zapłonem iskrowym to problemy z rozruchem, szarpanie, niekiedy falujące obroty i nierówna praca silnika. Zapobieganie awariom układu zapłonowego zwykle ogranicza się do stosowania dobrej jakości paliwa, jak też regularnej wymiany niektórych elementów: świec oraz - dawniej - przewodów zapłonowych, kopułki i tzw. palca rozdzielacza aparatu zapłonowego.
`

//obcięte zmienne zawierające tylko część tekstów

let czesc1 = (tekst1.slice(0,200))+"...";
console.log(czesc1);

let czesc2 = (tekst2.slice(0,200))+"...";
console.log(czesc2);

let czesc3 = (tekst3.slice(0,200))+"...";
console.log(czesc3);

//tablice ze zmiennymi

let teksty=[tekst1,tekst2,tekst3];
let czesci=[czesc1,czesc2,czesc3];
let naglowki=["Diagnostyka samochodowa","Naprawa układu hamulcowego","Naprawa układu zapłonowego"];

//po kliknieciu w element z menu o klasie oferta karty zostają wyświetlone w midzie ale tylko częściowo

let oferta = document.querySelectorAll('.oferta');

for (let i=0; i<oferta.length;i++)
{
    oferta[i].addEventListener('click', function () {
        mid.innerHTML =
    `
    <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
    Oferta
    </div>
    
            <div class="container d-flex justify-content-around godz">
                <div class="row justify-content-center" >
    
                    <div class="col-lg-4 col-sm-12 col-md-6">
                        <div class="karta text-white card bg-secondary mb-1 mx-5" style="max-width: 18rem;">
                            <div class="card-header">${naglowki[0]}</div>
                            <div class="card-body">
                                <p class="card-text">${czesci[0]}</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-sm-12  col-md-6">
                        <div class="karta text-white card bg-secondary mb-1 mx-5" style="max-width: 18rem;">
                            <div class="card-header">${naglowki[1]}</div>
                            <div class="card-body">
                                <p class="card-text">${czesci[1]}</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-sm-12  col-md-6">
                        <div class="karta text-white card bg-secondary mb-1 mx-5" style="max-width: 18rem;">
                            <div class="card-header">${naglowki[2]}</div>
                            <div class="card-body">
                                <p class="card-text">${czesci[2]}</p>
                            </div>
                        </div>
                    </div>
    
                    
    
                </div>
            </div>
    `;
    
    
    //dodanie do kart zdarzeń które po najechaniu na nie wyświetlają całość tekstu, a po opuszceniu karty tylko część tekstu
    
    let karta = document.querySelectorAll('.karta');
    for(let i=0;i<karta.length;i++)
    {
        karta[i].addEventListener("mousemove", function (){
            karta[i].innerHTML =`<div class="card-header">${naglowki[i]}</div>
            <div class="card-body">
                <p class="card-text">${teksty[i]}</p>
            </div>`
        });
    
        karta[i].addEventListener("mouseout", function (){
            karta[i].innerHTML =`<div class="card-header">${naglowki[i]}</div>
            <div class="card-body">
                <p class="card-text">${czesci[i]}</p>
            </div>`
        });
    }
    
    //przewinięcie do mida przy kliknięciu na element o klasie oferta z menu
    mid.scrollIntoView();
    
    }
    );
}


