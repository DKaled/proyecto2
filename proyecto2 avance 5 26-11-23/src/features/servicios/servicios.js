document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('/getAllServices');
    const services = await response.json();
    const table = document.getElementById('serviceTable');

    services.forEach(service => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modificar';
        modifyButton.style.backgroundColor = 'yellow';
        modifyButton.style.color = 'black'
        modifyButton.setAttribute('rowId', service.ID);
        modifyButton.setAttribute('class', 'modify-button')
        modifyButton.setAttribute('onclick', 'updateServicio(this)')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.setAttribute('rowId', service.ID);
        deleteButton.setAttribute('class', 'delete-button')
        deleteButton.setAttribute('onclick', 'deleteServicio(this)')

        cell1.innerHTML = service.Nombre;
        cell2.innerHTML = service.Descripcion;
        cell3.innerHTML = service.Precio;
        cell4.appendChild(modifyButton);
        cell4.appendChild(deleteButton);
    })
})

async function deleteServicio(button) {
    await fetch("/deleteServicio?id=" + button.getAttribute("rowId"))
    location.reload()
}

async function updateServicio(button) {
    const response = await fetch('/getServicio?id=' + button.getAttribute('rowId'));
    const servicio = await response.json();
    servicio.forEach(servicio => {
        document.getElementById("name").value = servicio.Nombre;
        document.getElementById("description").value = servicio.Descripcion;
        document.getElementById("price").value = servicio.Precio;
        document.getElementById("createService").setAttribute("onclick", "confirmUpdateServicio(this)")
        document.getElementById("createService").setAttribute("rowId", servicio.ID)
        document.getElementById("createService").style.backgroundColor = "yellow"
        document.getElementById("createService").style.color = "black"
        document.getElementById("createService").innerHTML = "Modificar"
    })
}

async function confirmUpdateServicio(button) {
    await fetch('/updateServicio?id=' + button.getAttribute("rowId") + '&nombre=' + document.getElementById("name").value + '&descripcion=' + document.getElementById("description").value + '&precio=' + document.getElementById("price").value);
}

async function createServicio() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    await fetch("/createServicio?nombre=" + name + "&descripcion=" + description + "&precio=" + price)
}

