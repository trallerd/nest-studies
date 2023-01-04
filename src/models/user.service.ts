import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRespository: Repository<User>,
    ) { }

    async createOrUpdate(user: User): Promise<User> {
        const hash = await bcrypt.hash(user.getPassword(), 10);
        user.setPassword(hash);
        return this.usersRespository.save(user);
    }

    async login(email: string, passward: string): Promise<User> {
        const user = await this.usersRespository.findOne({ where: { email: email } });
        if (user) {
            const isMatch = await bcrypt.compare(passward, user.getPassword());
            if (isMatch) {
                return user;
            }
        }
        return null
    }

    findOne(id: string): Promise<User> {
        return this.usersRespository.findOne({ where: { id: parseInt(id) } });
    }

    updateBalance(id: number, balance: number) {
        return this.usersRespository.update(id, { balance: balance });
    }

}