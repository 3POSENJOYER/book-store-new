import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [];

  // --- Реєстрація ---
  register(registerDto: RegisterDto) {
    const userExists = this.users.find(
      (user) => user.email === registerDto.email,
    );
    if (userExists) {
      throw new ConflictException('Користувач з таким email вже існує');
    }

    const newUser: User = {
      id: Date.now(),
      name: registerDto.name,
      email: registerDto.email,
      password: registerDto.password,
    };

    this.users.push(newUser);

    return { message: 'User registered successfully', user: newUser };
  }

  // --- Логін ---
  login(loginDto: LoginDto) {
    const user = this.users.find((u) => u.email === loginDto.email);

    if (!user || user.password !== loginDto.password) {
      throw new UnauthorizedException('Невірний email або пароль');
    }

    return {
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email },
    };
  }
}
