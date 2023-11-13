import {db} from "../database/database.js"
import { UserCreate } from "../interfaces/userCreate.js"



async function createUser ({name, email, password}: UserCreate) {

    await db.query(`INSERTO INTO users ("name", "email", "password") VALUES ($1, $2, $3)`, [name, email, password])

}





const createUserRepository = {
    createUser
}
export default createUserRepository