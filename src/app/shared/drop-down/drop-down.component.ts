import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.sass']
})
export class DropDownComponent implements OnInit {

  dropDownOpened = false
  constructor() { }

  ngOnInit(): void {
  }

}
