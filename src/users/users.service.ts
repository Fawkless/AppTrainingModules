import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  helloUser(): string {
    return 'Hola desde el servicio de Users';
  }
}
