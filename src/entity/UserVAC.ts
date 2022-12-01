import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserVAC {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    usuario: string

    @Column()
    senha: string

    @Column()
    email: string

    @Column()
    historicoCompra: string

    @Column()
    avaliacao: string
}
