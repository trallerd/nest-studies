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

}