import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async adminLogin(email: string, password: string) {
    // Temporary admin credentials
    const adminEmail = 'admin@restaurant.com';

    // Password: Admin@123
    const hashedPassword = await bcrypt.hash('Admin@123', 10);

    if (email !== adminEmail) {
      throw new UnauthorizedException('Invalid email');
    }

    const isValid = await bcrypt.compare(password, hashedPassword);

    if (!isValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      sub: 'admin',
      role: 'ADMIN',
      email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}