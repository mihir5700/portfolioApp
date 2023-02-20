import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfContactComponent } from './pf-contact.component';

describe('PfContactComponent', () => {
  let component: PfContactComponent;
  let fixture: ComponentFixture<PfContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
