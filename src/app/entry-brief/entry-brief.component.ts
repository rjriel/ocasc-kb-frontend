import { EntryBrief } from './../model/entry-brief';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-brief',
  templateUrl: './entry-brief.component.html',
  styleUrls: ['./entry-brief.component.css']
})
export class EntryBriefComponent implements OnInit {

  entry: EntryBrief;

  constructor() { }

  ngOnInit() {
  }

}
