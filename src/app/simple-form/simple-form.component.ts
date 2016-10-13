import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  public aplicarClase;

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

}
