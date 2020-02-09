//pobranie elementu z menu o klasie godziny i dodanie do niego zdarzenia kliknięcia, które wstawia treść do mida
let godz = document.querySelectorAll('.godziny');

for(let i=0;i<godz.length;i++)
{
    godz[i].addEventListener('click', function () {
        mid.innerHTML =`
    
        <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
                    Godziny otwarcia
                </div>
    
        
        <div class="d-flex justify-content-center  align-items-center godz container">
            <table class="table table-dark col-6">
                <thead>
                    <tr>
                        <th scope="col">Dzień tygodnia</th>
                        <th scope="col">Otwarcie</th>
                        <th scope="col">Zamknięcie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Poniedziałek</th>
                        <td>7:00</td>
                        <td>15:00</td>
                    </tr>
                    <tr>
                        <th scope="row">Wtorek</th>
                        <td>7:00</td>
                        <td>15:00</td>
                    </tr>
                    <tr>
                        <th scope="row">Środa</th>
                        <td>7:00</td>
                        <td>15:00</td>
                    </tr>
                    <tr>
                        <th scope="row">Czwartek</th>
                        <td>7:00</td>
                        <td>15:00</td>
                    </tr>
                    <tr>
                        <th scope="row">Piątek</th>
                        <td>7:00</td>
                        <td>15:00</td>
                    </tr>
                    <tr>
                        <th scope="row">Sobota</th>
                        <td>7:00</td>
                        <td>13:00</td>
                    </tr>
                    <tr>
                        <th scope="row">Niedziela</th>
                        <td>X</td>
                        <td>X</td>
                    </tr>
    
    
                </tbody>
            </table>
            </div>
          
            `
            //przewinięcie do mida przy kliknięciu na element o klasie godziny z menu
            akt.scrollIntoView();
    });
}


