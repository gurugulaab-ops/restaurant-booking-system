import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, Length } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({
    example: '9876543210',
  })
  @IsMobilePhone('en-IN')
  phone!: string;

  @ApiProperty({
    example: '123456',
  })
  @Length(6, 6)
  otp!: string;
}