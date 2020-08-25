import { Controller, HttpCode, Post, Req, Get, UseGuards, Body } from '@nestjs/common';

import { Request } from 'express';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { Admin } from '@api/features/admin/admin.entity';
import { WrongCredentialsWereProvidedException } from './auth.exception';

@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('register')
    @HttpCode(204)
    async register(@Req() request: Request) { }

    @Post('login')
    @HttpCode(200)
    async login(@Req() request: Request): Promise<Admin> {
        const admin = await this.authService.authenticateAdmin(request.body);
        if(!admin) throw new WrongCredentialsWereProvidedException();

        const jwtCookie = this.authService.generateCookieWithJwtToken(admin);
        request.res.setHeader('Set-Cookie', jwtCookie);

        return admin;
    }

    @Post('logout')
    @HttpCode(200)
    async logout(@Req() request: Request) { }

    @Get('test')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async test(@Req() request: Request) { }
}