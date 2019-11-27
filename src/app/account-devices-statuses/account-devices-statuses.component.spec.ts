import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDevicesStatusesComponent } from './account-devices-statuses.component';

describe('AccountDevicesStatusesComponent', () => {
  let component: AccountDevicesStatusesComponent;
  let fixture: ComponentFixture<AccountDevicesStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDevicesStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDevicesStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
