import { EntryBrief } from './../model/entry-brief';
import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-my-entries',
  templateUrl: './my-entries.component.html',
  styleUrls: ['./my-entries.component.css']
})
export class MyEntriesComponent implements OnInit {
  entries: EntryBrief[];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.fetchMyEntries().subscribe(
      entries => this.entries = entries
    );
  }

}
