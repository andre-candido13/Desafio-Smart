import bcrypt from "bcrypt"




export async function createUser (name: string, email: string, password:string) {

    const hashPassword = await bcrypt.hash(password, 10);
    await createUserRepository.createUser(name, email, password: hashPassword);

}