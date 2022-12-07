import { Component,Input } from '@angular/core';
import { Client } from '../models/Client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent{

  @Input() listClients : any;

  constructor() { }

}
