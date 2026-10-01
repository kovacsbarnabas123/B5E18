const API_URL = "http://localhost:5242/api/eszkozok";

const eszkozokLekerdezesek = () =>{

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {


            const tabla = document.querySelector('#eszkozTable');
            tabla.innerHTML = ""

            data.forEach(eszkoz => {
                tabla.innerHTML += `
                    <tr>

                        <td>${eszkoz.id}</td>
                        <td>${eszkoz.nev}</td>
                        <td>${eszkoz.leltariSzam}</td>
                        <td>${eszkoz.kategoria}</td>
                        <td>${eszkoz.gyarto}</td>
                        <td>${eszkoz.terem}</td>
                        <td>${eszkoz.allapot}</td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.log(error)
            document.getElementById("uzenet").innerHTML = 
                '<div class="alert alert-danger">Nem sikerult csatlakozni</div>'
        })
}
// addeventlistener segitsegevel figyelunk egy felhasznaloi esemneyt.
//hogyha bekovetkezik ez az esemeny kattintas, akkor utana meghiv egy fuggvenyt az addeventlistener > eszkozokLerendezese.
document.getElementById("lekerdezesGomb")
    .addEventListener("click",eszkozokLekerdezesek)