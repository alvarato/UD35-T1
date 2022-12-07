import { Component } from '@angular/core';
import { group } from 'console';
import { Client } from './models/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularAltaCliente';
  nameC: string ="";
  cifC: string = "";
  addressC: string = "";
  groupC: number = 0;
  listClients: Client[] | null = null;
  constructor(){}

  addClient(): void{
    //generate client
    const client : Client = {
      name: this.nameC,
      cif: this.cifC,
      address: this.addressC,
      group : this.groupC
    } 
    if(this.listClients == null) this.listClients = [];
    this.listClients.push(client);
    //clean inputs
    this.nameC = "";
    this.cifC = "";
    this.addressC = "";  
  }
}
