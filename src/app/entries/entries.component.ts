import { EntryService } from './../entry.service';
import { EntryBrief } from './../model/entry-brief';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  types: string[] = [
    'Plan an event',
    'Run the school council',
    'Advisory support',
    'Add school infrastructure'
  ];

  private entryBriefs: EntryBrief[] = [];
  displayedEntryBriefs: EntryBrief[] = [];
  entrySearchValue: string;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.fetchEntries().subscribe(
      entries => {
        const approved = entries.filter(entry => entry.approved);
        this.entryBriefs = approved;
        this.displayedEntryBriefs = approved;
      }
    );
  }

  filterEntryBriefs(): void {
    this.displayedEntryBriefs = this.entryBriefs.filter(
      entry =>
        (entry.title ? entry.title.includes(this.entrySearchValue) : false) ||
        (entry.shortDescription ? entry.shortDescription.includes(this.entrySearchValue) : false) ||
        (entry.keywords ? entry.keywords.join().includes(this.entrySearchValue) : false)
    );
  }
}
