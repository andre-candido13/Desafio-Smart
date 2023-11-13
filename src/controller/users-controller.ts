import { Request, Response } from "express";
import httpStatus from "http-status";
import createUserService from "../service/users-service.js";



export async function createUser (req: Request, res: Response) {

    const { name, email, password } = req.body

    try {

       const user =  await createUserService.createUser({name, email, password})
        return res.status(httpStatus.CREATED).send(user)


    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)

    }

}