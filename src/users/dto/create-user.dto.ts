
import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {

  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  age: number;

}

