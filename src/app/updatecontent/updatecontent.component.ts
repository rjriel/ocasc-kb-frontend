import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpdatecontentService } from '../updatecontent.service';

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

    });
    schools = [
        { value: 'school-0', viewValue: 'A Secondary School' },
        { value: 'school-1', viewValue: 'B Elementary' },
    ];

    keywords = [
        'electronic',
        'in person',
        'teachers',
        'with administration',
    ];
    types = [
        { value: 'type-0', viewValue: 'Plan an Event' },
        { value: 'type-1', viewValue: 'Run the school council' },
        { value: 'type-2', viewValue: 'Add school infrastructure' },
        { value: 'type-3', viewValue: 'Advisory support' },
    ];

    constructor(private fb: FormBuilder, private updateContentService: UpdatecontentService) { }

    ngOnInit() {
    }

    submit(): void {
        this.updateContentService.updatecontent(this.updateContentForm.value);
    }


}


