import { RegisterData } from "../entities/register-data.entity";

export abstract class RegisterUserRepository {
    abstract addUser(registerData: RegisterData): Promise<RegisterData>;
    abstract getUserByEmail(email: string): Promise<RegisterData>;
}