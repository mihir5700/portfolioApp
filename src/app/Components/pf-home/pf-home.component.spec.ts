import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfHomeComponent } from './pf-home.component';

describe('PfHomeComponent', () => {
  let component: PfHomeComponent;
  let fixture: ComponentFixture<PfHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
