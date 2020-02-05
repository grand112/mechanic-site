let akt = document.querySelector('.mid');
let date = new Date()
let title = "Wybrano pracownika miesiąca"
let tresc = "To powinno być skądś pobierane a nie, że se piszemy tak o w js wpisy. Nwm jescze jak to zrobić. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let place = "Kraków";
let content = `
                    <div class="akt container px-4 py-4 mx-auto my-4">
                        <div class="wpis row">
                            <div class="foto col-md-4 mb-2 d-flex justify-content-center" >
                                <img class ="doWpisu" src="http://m7.mech.pk.edu.pl/images/stories/p_osocha.jpg">
                            </div>
                            <div class="opis col-md-8 px-2 py-4 ">
                                <div class ="title h5 font-weight-bold text-center">
                                    ${title}
                                </div>
                                <div class ="tresc px-3 py-3 text-justify">
                                    <hr>
                                    ${tresc}
                                    <hr>
                                    <button type="button" class="btn btn-secondary float-right">czytaj więcej (nie dziala narazie)</button>
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
let button = `<div class="wiecej float-right mx-3 mb-3 ">
                <button type="button" class="btn btn-dark">Wyświetl wiecej (osocha do nieskonczonosci)</button>
              </div>
              `;

(function () {
    akt.innerHTML = content+button;
})();

let wpis = document.querySelector('.akt');
let wiecej = document.querySelector('.wiecej');
wiecej.addEventListener("click", function(){
    wpis.insertAdjacentHTML('afterend', content)
});
    

