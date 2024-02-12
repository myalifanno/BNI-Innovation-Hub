import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PeopleStatus } from "./test-data.model";

@Entity()
export class People {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    status: PeopleStatus
}