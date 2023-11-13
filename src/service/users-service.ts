import bcrypt from "bcrypt";
import createUserRepository from "../respository/users-repository";
import { UserCreate } from "../interfaces/userCreate";




async function createUser ({name, email, password}: UserCreate) {

    const hashPassword: string = await bcrypt.hash(password, 10);
    await createUserRepository.createUser({name, email, password: hashPassword});

}






const createUserService = {
    createUser
}

export default createUserService