import { Controller, Post, Body, Get, Query, NotFoundException } from "@nestjs/common";
import { RegisterUserRepository } from "../../domain/repositores/register-user.repository";
import { RegisterData } from "../../domain/entities/register-data.entity";

@Controller('users')
export class RegisterUserController {
    constructor(private readonly registerUserRepository: RegisterUserRepository) { }

    @Post()
    async postUser(@Body() registerData: RegisterData): Promise<RegisterData> {
        return this.registerUserRepository.addUser(registerData);
    }

    @Get()
    async getUserByEmail(@Query('email') email: string): Promise<RegisterData> {
        const user = await this.registerUserRepository.getUserByEmail(email);
        if (user === null) throw new NotFoundException("The user was not found");
        return user;
    }
}