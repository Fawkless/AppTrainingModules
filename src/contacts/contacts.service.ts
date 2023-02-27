import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  helloContact(): string {
    return 'Hola desde el servicio de Contactos';
  }
}
