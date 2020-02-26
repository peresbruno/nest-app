import { RegisterData } from "../domain/entities/register-data.entity";
import { RegisterUserRepository } from "../domain/repositores/register-user.repository";

export class RegisterUserUseCase {
    constructor(private readonly registerUserRepository: RegisterUserRepository) { }
    register(registerData: RegisterData): Promise<RegisterData> {
        return null;
    }
}