const dbMethods = require("../../db/methods")
const {} = require("../../db/methods");
const ventaController = {}

ventaController.getAllVentas = async (req, res) => {
    res.json(await dbMethods.getAllVentas())
}

ventaController.getVenta = async (req, res) => {
    res.json(await dbMethods.getVenta(req.query.fecha))
}

ventaController.createVenta = async (req, res) => {
    let resql = await dbMethods.createVenta(req.query.total, req.query.iva, req.query.costo, req.query.fecha)
    res.json("ID: " + resql.insertId + " Affected Rows: " + resql.affectedRows)
}

ventaController.updateVenta = async (req, res) => {
    let resql = await dbMethods.updateVenta(req.query.id, req.query.total, req.query.iva, req.query.costo, req.query.fecha)
    res.json(resql.info)
}

ventaController.deleteVenta = async (req, res) => {
    let resql = await dbMethods.deleteVenta(req.query.id)
    res.json("Affected rows: " + resql.affectedRows)
}

module.exports = ventaController;