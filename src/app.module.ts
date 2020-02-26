import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterUserController } from './features/register/frameworks/controllers/register-user.controller';
import { RegisterUserRepositoryImpl } from './features/register/frameworks/repositories/register-user-impl.repository';
import { RegisterUserRepository } from './features/register/domain/repositores/register-user.repository';

@Module({
  imports: [],
  controllers: [RegisterUserController],
  providers: [
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: RegisterUserRepository,
      useClass: RegisterUserRepositoryImpl
    },
  ],
})
export class AppModule { }
