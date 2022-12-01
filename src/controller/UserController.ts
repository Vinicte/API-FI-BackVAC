import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { UserVAC } from "../entity/UserVAC"
import { AppDataSource } from "../data-source"

export class UserController {

    private userRepository = AppDataSource.getRepository(UserVAC)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.userRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {        
         const email = request.params                      
         const user = await AppDataSource.getRepository(UserVAC).delete(email)                      
         if(user.affected ==1){             
            const userUpdated = await AppDataSource.getRepository(UserVAC).findOneBy(email)              
            response.json           
            (userUpdated)

}}}