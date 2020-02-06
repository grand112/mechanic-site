let cen = document.querySelector('.cennik');
let mid3 = document.querySelector('.mid');

cen.addEventListener('click', function () {
    mid3.innerHTML =
    `
    <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
                Cennik
    </div>

        <div class="d-flex justify-content-center  align-items-center container godz">
            <table class="table table-dark col-6"><tbody><tr><td style="text-align: center;" colspan="2" width="554"><h2><strong>Diagnostyka samochodowa</strong></h2></td></tr><tr><td>Wymiana akumulatora</td><td style="text-align: right;">od 20 PLN</td></tr><tr><td>Analiza spalin</td><td style="text-align: right;">od 40 PLN</td></tr><tr><td>Test amortyzatorów</td><td style="text-align: right;">od 40 PLN</td></tr><tr><td>Test hamulców na płytach rolkowych</td><td style="text-align: right;">od 50 PLN</td></tr><tr><td>Test akumulatora</td><td style="text-align: right;">od 25 PLN</td></tr><tr><td>Ustawienie zbieżności/geometrii kół</td><td style="text-align: right;">od 120 PLN</td></tr><tr><td>Ustawienie świateł</td><td style="text-align: right;">od 25 PLN</td></tr><tr><td>Diagnostyka komputerowa</td><td style="text-align: right;">od 120 PLN</td></tr><tr><td>Kasowanie inspekcji olejowej</td><td style="text-align: right;">od 40 PLN</td></tr><tr><td>Pomiar zadymienia silnika „ZS”</td><td style="text-align: right;">od 40 PLN</td></tr></tbody></table>
        </div>

        <div class="d-flex justify-content-center  align-items-center container godz">
            <table class="table table-dark col-6"><tbody><tr><td style="text-align: center;" colspan="2" width="554"><h2><strong>Naprawa układu hamulcowego</strong></h2></td></tr><tr><td>Wymiana klocków hamulcowych przód komplet</td><td style="text-align: right;">od 50 PLN</td></tr><tr><td>Wymiana klocków hamulcowych tył komplet</td><td style="text-align: right;">od 70 PLN</td></tr><tr><td>Wymiana tarcz hamulcowych 2 szt.</td><td style="text-align: right;">od 120 PLN</td></tr><tr><td>Wymiana szczęk hamulcowych komplet</td><td style="text-align: right;">od 135 PLN</td></tr><tr><td>Wymiana cylinderka hamulcowego 1 szt.</td><td style="text-align: right;">od 60 PLN</td></tr><tr><td>Wymiana przewodów hamulcowych komplet</td><td style="text-align: right;">od 320 PLN</td></tr><tr><td>Wymiana pompy hamulcowej</td><td style="text-align: right;">od 120 PLN</td></tr><tr><td>Wymiana linki hamulca ręcznego</td><td style="text-align: right;">od 90 PLN</td></tr><tr><td>Regulacja hamulca ręcznego</td><td style="text-align: right;">od 50 PLN</td></tr><tr><td>Uruchomienie zacisku hamulcowego</td><td style="text-align: right;">od 50 PLN</td></tr><tr><td>Wymiana płynu hamulcowego</td><td style="text-align: right;">od 60 PLN</td></tr></tbody></table>
        </div>

        <div class="d-flex justify-content-center  align-items-center container godz">
            <table class="table table-dark col-6"><tbody><tr><td style="text-align: center;" colspan="2" width="554"><h2><strong>Naprawa układu zapłonowego</strong></h2></td></tr><tr><td>Regulacja zaworów silnikowych</td><td style="text-align: right;">od 150 PLN</td></tr><tr><td>Wymiana cewki
            zapłonowej</td><td style="text-align: right;">od 50 PLN</td></tr><tr><td>Wymiana
            przewodów zapłonowych</td><td style="text-align: right;">od 40
            PLN</td></tr><tr><td>Wymiana świec zapłonowych komplet</td><td style="text-align: right;">od 60 PLN</td></tr><tr><td>Wymiana świec żarowych
            </td><td style="text-align: right;">od 40 PLN</td></tr></tbody></table>
        </div>
`
     
});