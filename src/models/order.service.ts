import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "./order.entity";

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) { }

    createOrUpdate(order: Order): Promise<Order> {
        return this.orderRepository.save(order);
    }

    findByUserId(id: number): Promise<Order[]> {
        return this.orderRepository.find({
            where: {
                user: { id: id },
            },
            relations: ['items', 'items.product'],

        });
    }
}