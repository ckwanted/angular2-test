import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  public mensajes;

  constructor() {
    this.mensajes = [
        {id : 0, text : "Tu ahora tienes un amigo llamado John"},
        {id : 1, text : "Tu ahora tienes un amigo llamado SAE"}
    ];
  }

  /*update(id, text) {
      this.mensajes = this.mensajes.map(m => m.id === id ? {id, text} : m);
  }*/

}
