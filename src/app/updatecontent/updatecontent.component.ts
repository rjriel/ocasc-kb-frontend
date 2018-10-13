import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatecontent',
  templateUrl: './updatecontent.component.html',
  styleUrls: ['./updatecontent.component.css']
})
export class UpdatecontentComponent implements OnInit {

  types = [
    {value: 'type-0', viewValue: 'How To'},
    {value: 'type-1', viewValue: 'Minutes'},
  ];
  constructor() { 
    }

  ngOnInit() {
  }
}

  
