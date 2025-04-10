import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProUserDashboardComponent } from './pro-user-dashboard.component';

describe('ProUserDashboardComponent', () => {
  let component: ProUserDashboardComponent;
  let fixture: ComponentFixture<ProUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProUserDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
