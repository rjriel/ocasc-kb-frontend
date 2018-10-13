import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontentComponent } from './updatecontent.component';

describe('UpdatecontentComponent', () => {
  let component: UpdatecontentComponent;
  let fixture: ComponentFixture<UpdatecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
