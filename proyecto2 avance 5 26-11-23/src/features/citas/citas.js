// JavaScript para citas (citas.js)

document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('/getAllCitas');
    const citas = await response.json();
    const table = document.getElementById('citasTable');

    citas.forEach(cita => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modificar';
        modifyButton.style.backgroundColor = 'yellow';
        modifyButton.style.color = 'black'
        modifyButton.setAttribute('rowId', cita.ID);
        modifyButton.setAttribute('class', 'modify-button')
        modifyButton.setAttribute('onclick', 'updateCita(this)')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.setAttribute('rowId', cita.ID);
        deleteButton.setAttribute('class', 'delete-button')
        deleteButton.setAttribute('onclick', 'deleteCita(this)')

        cell1.innerHTML = cita.Inicio;
        cell2.innerHTML = cita.Fin;
        cell3.innerHTML = cita.Fecha;
        cell4.appendChild(modifyButton);
        cell5.appendChild(deleteButton);
    })
})

async function deleteCita(button) {
    await fetch("/deleteCita?id=" + button.getAttribute("rowId"))
    location.reload()
}

async function updateCita(button) {
    const response = await fetch('/getCita?id=' + button.getAttribute('rowId'));
    const cita = await response.json();
    cita.forEach(cita => {
        // Asegúrate de cambiar los IDs y atributos según tus necesidades
        document.getElementById("inicio").value = cita.Inicio;
        document.getElementById("fin").value = cita.Fin;
        document.getElementById("fecha").value = cita.Fecha;
        document.getElementById("createCita").setAttribute("onclick", "confirmUpdateCita(this)")
        document.getElementById("createCita").setAttribute("rowId", cita.ID)
        document.getElementById("createCita").style.backgroundColor = "yellow"
        document.getElementById("createCita").style.color = "black"
        document.getElementById("createCita").innerHTML = "Modificar"
    })
}

async function confirmUpdateCita(button) {
    await fetch('/updateCita?id=' + button.getAttribute("rowId") + '&inicio=' + document.getElementById("inicio").value + '&fin=' + document.getElementById("fin").value + '&fecha=' + document.getElementById("fecha").value);
}

async function createCita() {
    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;
    const fecha = document.getElementById('fecha').value;
    await fetch("/createCita?inicio=" + inicio + "&fin=" + fin + "&fecha=" + fecha)
}
