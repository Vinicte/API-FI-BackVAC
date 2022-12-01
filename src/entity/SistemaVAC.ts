import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaVAC {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    genero: string

    @Column()
    plataforma: string

    @Column()
    dataLancamento: string

    @Column()
    preco: string
}