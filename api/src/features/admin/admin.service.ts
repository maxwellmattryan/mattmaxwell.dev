import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { PostgresErrorCode } from '@api/core/database/postgres-error-code.enum';

import { InternalServerErrorException } from '@api/core/http/http.exception';
import { AdminAlreadyExistsException, AdminNotFoundException } from './admin.exception';

import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>
    ) { }

    public async createAdmin(adminData: Admin): Promise<Admin> {
        const admin: Admin = await this.adminRepository.create(adminData);

        await this.adminRepository.save(admin)
            .catch((error) => {
                if(error.code === PostgresErrorCode.UNIQUE_VIOLATION) {
                    throw new AdminAlreadyExistsException();
                } else {
                    throw new InternalServerErrorException();
                }
            });

        return admin;
    }

    public async getByUsername(username: string): Promise<Admin> {
        const admin = await this.adminRepository.findOne({ username: username });

        if(!admin) {
            throw new AdminNotFoundException();
        } else {
            return admin;
        }
    }
}