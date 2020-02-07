const mid = document.querySelector('.mid');
const search = document.querySelector('.wyszukaj');
const magnifier = document.querySelector('.magnifierButton');

// pobranie slow do wyszukania gdy uzytkownik wcisnie enter lub kliknie w lupe
// wpisanie slow i klkniecie enter powoduje wcisniecie buttona z lupa
// preventDefault blokuje przeladowanie strony po wcisnieciu enter
search.addEventListener("keydown", function(e){
    if(e.keyCode===13)
    {
        e.preventDefault();
        magnifier.click();
    }
});

//pobranie slow po wcisnieciu buttona z lupa
let word;
let wynik;
let splittedHTML;
let splittedWord;
magnifier.addEventListener("click",function(){
    word=search.value;
    //podzielenie szukanej frazy na pojedyncze slowa
    splittedWord=word.split(" ");
    //sprawdzane jest czy uzytkownik podal przynajmniej jeden znak
    if(word==="")
    {
        wynik = "Nie wpisano żadnego znaku. Proszę wpisać przynajmniej jeden znak i wyszukać ponownie.";
    }

    // podzielenie zawartosci mida na pojedyncze slowa
    splittedHTML = mid.textContent.split(" ");
    // domyslny wynik to brak wyszukanej frazy
    wynik = "Niestety, nic nie znaleziono."
    console.log("ni ma");
    //porownanie szukanej frazy z zawartoscia mida
    // jezeli szukana fraza zostanie znaleziona nadpisywany jest wynik ktory domyslnie wyswietlal brak szukanej frazy
    for(let i=0;i<splittedHTML.length;i++)
    {
        for(let j=0;j<splittedWord.length;j++)
        {
            if(splittedWord[j]===splittedHTML[i])
            {
                wynik = "no jest takie xD tylko ze nwm jak wyswietlic miejsce w ktorym ono jest";
                console.log("jest");
            }
        }
        
    }

    //wyniki wyszukiwania wyswietlane w midzie
    /* mid.innerHTML = `
                        <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
                            Wyniki wyszukiwania dla "${word}":
                        </div>
                        <div class ="px-3 py-3 text-justify row d-flex justify-content-center text-white">
                            ${wynik}
                        </div>
                    `;   */
    });






