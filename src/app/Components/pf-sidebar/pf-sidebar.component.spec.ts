import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfSidebarComponent } from './pf-sidebar.component';

describe('PfSidebarComponent', () => {
  let component: PfSidebarComponent;
  let fixture: ComponentFixture<PfSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
