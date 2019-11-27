import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGatewaysStatusesComponent } from './account-gateways-statuses.component';

describe('AccountGatewaysStatusesComponent', () => {
  let component: AccountGatewaysStatusesComponent;
  let fixture: ComponentFixture<AccountGatewaysStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGatewaysStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGatewaysStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
