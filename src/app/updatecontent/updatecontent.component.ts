import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatecontent',
  templateUrl: './updatecontent.component.html',
  styleUrls: ['./updatecontent.component.css']
})
export class UpdatecontentComponent implements OnInit {

  types = [
    {value: 'type-0', viewValue: 'Plan an Event'},
    {value: 'type-1', viewValue: 'Run the school council'},
    {value: 'type-2', viewValue: 'Add school infrastructure'},
    {value: 'type-3', viewValue: 'Advisory support'},
  ];
  communications = [
    'electronic',
    'in person',
    'teachers',
    'with administration',
  ];
  schools = [
      {value: 'school-0',  viewValue: 'A Secondary School'},
      {value: 'school-1',  viewValue: 'B Elementary'},

  ];
  financial = [
      {value: 'fin-0', viewValue: 'PRO Grant'},
  ];
  location = [
      {value: 'loc-0', viewValue: 'off site'},
      {value: 'loc-1', viewValue: 'at school'},
      {value: 'loc-2', viewValue: 'outside'},
      {value: 'loc-3', viewValue: 'inside'},
  ];
    population = [
      {value: 'pop-0', viewValue: 'elementary'},
      {value: 'pop-1', viewValue: 'preschool'},
      {value: 'pop-2', viewValue: 'high school'},
      {value: 'pop-3', viewValue: 'adult education'},
      {value: 'pop-4', viewValue: 'family'},
      {value: 'pop-5', viewValue: 'parents only'},
    ];
    requirements = [
      {value: 'req-0', viewValue: 'food'},
      {value: 'req-1', viewValue: 'security'},
      {value: 'req-2', viewValue: 'fundraiser'},
      {value: 'req-3', viewValue: 'insurance'},
    ];
    times = [
      {value: 'tim-0', viewValue: 'evening'},
      {value: 'tim-1', viewValue: 'school day'},
      {value: 'tim-2', viewValue: 'weekend'},
      {value: 'tim-3', viewValue: 'seasonal'},
    ];
    
  constructor() { 
    }

  ngOnInit() {
  }
}

  
