const dbMethods = require("../../db/methods")
const {} = require("../../db/methods");
const servicioController = {}

servicioController.getAllServicios = async (req, res) => {
    res.json(await dbMethods.getAllServicios())
}

servicioController.getServicio = async (req, res) => {
    res.json(await dbMethods.getServicio(req.query.id))
}

servicioController.createServicio = async (req, res) => {
    let resql = await dbMethods.createServicio(req.query.nombre, req.query.descripcion, req.query.precio)
    res.json("ID: " + resql.insertId + " Affected Rows: " + resql.affectedRows)
}

servicioController.updateServicio = async (req, res) => {
    let resql = await dbMethods.updateServicio(req.query.id, req.query.nombre, req.query.descripcion, req.query.precio)
    res.json(resql.info)
}

servicioController.deleteServicio = async (req, res) => {
    let resql = await dbMethods.deleteServicio(req.query.id)
    res.json("Affected rows: " + resql.affectedRows)
}

module.exports = servicioController;