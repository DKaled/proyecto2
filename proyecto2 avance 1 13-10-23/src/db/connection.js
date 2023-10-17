import mysql from "mysql"

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyecto2devpr"
})

connection.connect()
let query = "SELECT * FROM usuario"

connection.query(query, function (error, results, fields) {
    if (error) throw error
    console.log(results)
    return results;
})
connection.end()

export function getAllUsers()  {
    let query = "SELECT * FROM usuario"
    connection.connect()
    connection.query(query, function (error, results, fields) {
        if (error) throw error
        console.log(results)
        return results;
    })
    connection.end()
}