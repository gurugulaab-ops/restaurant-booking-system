import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone } from 'class-validator';

export class SendOtpDto {
  @ApiProperty({
    example: '9876543210',
  })
  @IsMobilePhone('en-IN')
  phone!: string;
}