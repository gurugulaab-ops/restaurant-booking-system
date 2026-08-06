import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    example: 'Restaurant Owner',
  })
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'admin@restaurant.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'Admin@123',
  })
  @MinLength(6)
  password!: string;
}