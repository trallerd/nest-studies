import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) { }

    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    findOne(id: string): Promise<Product> {
        return this.productsRepository.findOne({ where: { id: parseInt(id) } });
    }

    createOrUpdate(product: Product): Promise<Product> {
        return this.productsRepository.save(product);
    }

    async remove(id: string): Promise<void> {
        await this.productsRepository.delete(id);
    }

    findByIds(ids: string[]): Promise<Product[]> {
        return this.productsRepository.findBy({ id: In(ids) });
    }
}