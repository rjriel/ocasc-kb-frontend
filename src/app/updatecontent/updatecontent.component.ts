import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UpdatecontentService } from '../updatecontent.service';

export interface Keywords {
    name: string;
    color: string;
}

@Component({
    selector: 'app-updatecontent',
    templateUrl: './updatecontent.component.html',
    styleUrls: ['./updatecontent.component.css']
})
export class UpdatecontentComponent implements OnInit {
    updateContentForm = this.fb.group({
        'content_title': ['', Validators.required],
        'short_desc': ['', Validators.required],
        'long_desc': ['', Validators.required],
        'author': ['', Validators.required],
        'date_today': ['', Validators.required],
        'date_modified': ['', Validators.required],
        'selected_type': ['', Validators.required],
        'active_keywords': [[]],

    });
    schools = [
        { value: 'school-0', viewValue: 'A Secondary School' },
        { value: 'school-1', viewValue: 'B Elementary' },
    ];

    keywords: Keywords[] = [
        { name: 'electronic', color: 'grey'},
        { name: 'in person', color: 'grey'},
        { name: 'teachers',color: 'grey'},
        { name: 'with administration',color: 'grey'},
    ];
    types = [
        { value: 'type-0', viewValue: 'Plan an Event' },
        { value: 'type-1', viewValue: 'Run the school council' },
        { value: 'type-2', viewValue: 'Add school infrastructure' },
        { value: 'type-3', viewValue: 'Advisory support' },
    ];

    switch(kw: Keywords): void {
        const active_keywords = this.updateContentForm.get('active_keywords').value as string[];

        if (kw.color == 'red') {
            kw.color = 'grey';
        } else {
            kw.color = 'red';
        }
        let index = active_keywords.findIndex( value =>
            value === kw.name
        );

        if (index >= 0) {
            active_keywords.splice(index, 1);
        } else {
                // Add our keyword
            if (kw.name) {
                active_keywords.push(kw.name);
            }
        }

    }

    constructor(private fb: FormBuilder, private updateContentService: UpdatecontentService) { }

    ngOnInit() {
    }

    submit(): void {
        this.updateContentService.updatecontent(this.updateContentForm.value);
    }


}


