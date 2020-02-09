//zmienne z zawartoscia koszyka do przekazania 
const koszyk = document.querySelectorAll('.koszyk');

const trescBasket = `Trochę tu pusto :( <br> Jescze niczego nie dodano do koszyka. Nasze produkty możesz zobaczyć w <u>zakładce Oferta</u>. Jeżeli któryś produkt Ci się spodoba dodaj go do koszyka.`;
content = `
            <div class="akt container px-4 py-4 mx-auto my-4">
                <div class="wpis row">
                        <div class ="tresc px-3 py-3 text-justify">
                            ${trescBasket}
                        </div>
                    </div>
                </div>
            </div>
           `;
const headerBasket = "Koszyk";
const naglowekBasket = `
            <div class="naglowek d-flex justify-content-center w-100 h1 mt-2 text-white">
                ${headerBasket}
            </div>
           `;

//dodanie zawartosci koszyka do mida
for(let i=0;i<koszyk.length;i++)
{
    koszyk[i].addEventListener("click",function(){
        mid.innerHTML=naglowekBasket+content;
    });
}
