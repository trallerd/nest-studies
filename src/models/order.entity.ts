import { InjectEntityManager } from "@nestjs/typeorm";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { User } from "./user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    total: number;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @OneToMany(() => Item, (item) => item.order)
    items: Item[];

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getTotal(): number {
        return this.total;
    }

    setTotal(total: number) {
        this.total = total;
    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User) {
        this.user = user;
    }

    getItems(): Item[] {
        return this.items;
    }

    setItems(items: Item[]) {
        this.items = items;
    }
}