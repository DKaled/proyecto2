const connection = require("./connection")
const md5 = require("md5")

async function getAllUsers()  {
    let query = "SELECT * FROM usuario"
    try {
        const [rows] = await (await connection).execute(query)
        return rows
    } catch (err) {
        throw err
    }
}

async function getUser(correo, contrasenna)  {
    let query = "SELECT * FROM usuario WHERE correo = ? && contrasenna = ?"
    let values = [correo, md5(contrasenna)]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function createUser(nombre, correo, contrasenna)  {
    let query = "INSERT INTO usuario(nombre, correo, contrasenna) VALUES (?,?,?)"
    let values = [nombre, correo, md5(contrasenna)]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function updateUser(id, nombre, correo, contrasenna)  {
    let query = "UPDATE usuario SET nombre = ?, correo = ?, contrasenna = ? WHERE ID = ?"
    let values = [nombre, correo, md5(contrasenna), id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function deleteUser(id)  {
    let query = "DELETE FROM usuario WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function getAllCitas()  {
    let query = "SELECT * FROM cita"
    try {
        const [rows] = await (await connection).execute(query)
        return rows
    } catch (err) {
        throw err
    }
}

async function getCita(fecha)  {
    let query = "SELECT * FROM cita WHERE fecha = ?"
    let values = [fecha]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function createCita(inicio, fin, fecha)  {
    let query = "INSERT INTO cita(inicio, fin, fecha) VALUES (?,?,?)"
    let values = [inicio, fin, fecha]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function updateCita(id, inicio, fin, fecha)  {
    let query = "UPDATE cita SET inicio = ?, fin = ?, fecha = ? WHERE ID = ?"
    let values = [inicio, fin, fecha, id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function deleteCita(id)  {
    let query = "DELETE FROM cita WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function getAllServicios()  {
    let query = "SELECT * FROM servicio"
    try {
        const [rows] = await (await connection).execute(query)
        return rows
    } catch (err) {
        throw err
    }
}

async function getServicio(id)  {
    let query = "SELECT * FROM servicio WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function createServicio(nombre, descripcion, precio)  {
    let query = "INSERT INTO servicio(nombre, descripcion, precio) VALUES (?,?,?)"
    let values = [nombre, descripcion, precio]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function updateServicio(id, nombre, descripcion, precio)  {
    let query = "UPDATE servicio SET nombre = ?, descripcion = ?, precio = ? WHERE ID = ?"
    let values = [nombre, descripcion, precio, id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function deleteServicio(id)  {
    let query = "DELETE FROM servicio WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function getAllVentas()  {
    let query = "SELECT * FROM venta"
    try {
        const [rows] = await (await connection).execute(query)
        return rows
    } catch (err) {
        throw err
    }
}

async function getVenta(fecha)  {
    let query = "SELECT * FROM venta WHERE fecha = ?"
    let values = [fecha]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function createVenta(total, iva, costo, fecha)  {
    let query = "INSERT INTO venta(total, iva, costo, fecha) VALUES (?,?,?,?)"
    let values = [total, iva, costo, fecha]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function updateVenta(id, total, iva, costo, fecha)  {
    let query = "UPDATE venta SET total = ?, iva = ?, costo = ?, fecha = ? WHERE ID = ?"
    let values = [total, iva, costo, fecha, id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function deleteVenta(id)  {
    let query = "DELETE FROM venta WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function getAllControl()  {
    let query = "SELECT * FROM control"
    try {
        const [rows] = await (await connection).execute(query)
        return rows
    } catch (err) {
        throw err
    }
}

async function getControl(id)  {
    let query = "SELECT * FROM control WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function createControl(usuario, servicio, venta, cita)  {
    let query = "INSERT INTO control(usuario, servicio, venta, cita) VALUES (?,?,?,?)"
    let values = [usuario, servicio, venta, cita]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function updateControl(id, usuario, servicio, venta, cita)  {
    let query = "UPDATE control SET usuario = ?, servicio = ?, venta = ?, cita = ? WHERE ID = ?"
    let values = [usuario, servicio, venta, cita, id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

async function deleteControl(id)  {
    let query = "DELETE FROM control WHERE id = ?"
    let values = [id]
    try {
        const [rows] = await (await connection).execute(query, values)
        return rows
    } catch (err) {
        throw err
    }
}

const dbMethods = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getAllCitas,
    getCita,
    createCita,
    updateCita,
    deleteCita,
    getAllServicios,
    getServicio,
    createServicio,
    updateServicio,
    deleteServicio,
    getAllVentas,
    getVenta,
    createVenta,
    updateVenta,
    deleteVenta,
    getAllControl,
    getControl,
    createControl,
    updateControl,
    deleteControl
}

module.exports = dbMethods