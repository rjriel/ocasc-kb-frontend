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
    });

    types = [
        'electronic',
        'in person',
        'teachers',
        'with administration',
    ];

    constructor(private fb: FormBuilder, private updateContentService: UpdatecontentService) { }

    ngOnInit() {
    }

    submit(): void {
        this.updateContentService.updatecontent(this.updateContentForm.value);
    }


}


