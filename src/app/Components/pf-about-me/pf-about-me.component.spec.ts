import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfAboutMeComponent } from './pf-about-me.component';

describe('PfAboutMeComponent', () => {
  let component: PfAboutMeComponent;
  let fixture: ComponentFixture<PfAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
