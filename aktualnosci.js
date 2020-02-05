let akt = document.querySelector('.mid');
let date = new Date()
console.log(date.getDay());
console.log(date);
(function () {
    akt.innerHTML = `
                        <div class="akt container">
                            <div class="wpis">
                                <div class="foto>

                                </div>
                                <div class="data">
                                    ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}r. 
                                </div>
                                <div class="opis">
                                    Wybrano mechanika miesiąca. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                    `;
})();
