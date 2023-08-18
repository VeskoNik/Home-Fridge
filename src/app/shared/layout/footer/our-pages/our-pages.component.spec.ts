import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPagesComponent } from './our-pages.component';

describe('OurPagesComponent', () => {
  let component: OurPagesComponent;
  let fixture: ComponentFixture<OurPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPagesComponent]
    });
    fixture = TestBed.createComponent(OurPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
