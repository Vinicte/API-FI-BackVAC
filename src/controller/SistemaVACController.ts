import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { SistemaVAC } from "../entity/SistemaVAC"
import { AppDataSource } from "../data-source"

export class SistemaVACController {

    private userRepository = AppDataSource.getRepository(SistemaVAC)

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
        const user = await AppDataSource.getRepository(SistemaVAC).delete(email)                      
        if(user.affected ==1){             
           const userUpdated = await AppDataSource.getRepository(SistemaVAC).findOneBy(email)              
           response.json           
           (userUpdated)

}}

}