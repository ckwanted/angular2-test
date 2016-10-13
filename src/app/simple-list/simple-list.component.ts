import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {

  @Input() mensaje;

  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
