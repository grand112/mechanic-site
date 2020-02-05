let godz = document.querySelector('.godziny');
let mid2 = document.querySelector('.mid');

godz.addEventListener('click', function () {
    mid2.innerHTML =`
        <table class="table table-dark col-6">
            <thead>
                <tr>
                    <th scope="col">Dzień tygodnie</th>
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
        ;`
});