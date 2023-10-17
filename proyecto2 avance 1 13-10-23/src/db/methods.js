import { connection } from "./connection.js";

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