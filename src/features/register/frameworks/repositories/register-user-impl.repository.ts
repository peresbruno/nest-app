import { RegisterUserRepository } from "../../domain/repositores/register-user.repository";
import { RegisterData } from "../../domain/entities/register-data.entity";

export class RegisterUserRepositoryImpl implements RegisterUserRepository {

    private registers: RegisterData[] = [];

    async addUser(registerData: RegisterData): Promise<RegisterData> {
        this.registers.push(registerData);
        return Promise.resolve(registerData);
    }

    async getUserByEmail(email: string): Promise<RegisterData> {
        const user = this.registers.find(registerData => registerData.email == email);
        return Promise.resolve(typeof user !== 'undefined' ? user : null);
    }
}