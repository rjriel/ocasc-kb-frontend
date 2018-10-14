import { Details } from './../model/details';
import { DetailsService } from './../details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: Details;
  types = '';

  constructor(
    private route: ActivatedRoute,
    private detailsService: DetailsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailsService.fetchDetails(id).subscribe(
      details => {
        this.details = details;
        details.knowledgeItemCategory.forEach(
          typeId => this.detailsService.fetchType(typeId).subscribe(
            type => this.types += type['name']
          )
        );
      }
    );
  }

}
