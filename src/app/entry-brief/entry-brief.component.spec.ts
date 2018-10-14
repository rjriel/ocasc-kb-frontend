import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBriefComponent } from './entry-brief.component';

describe('EntryBriefComponent', () => {
  let component: EntryBriefComponent;
  let fixture: ComponentFixture<EntryBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
