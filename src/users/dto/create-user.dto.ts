export class CreateUserDto {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  is_active?: boolean;
}
