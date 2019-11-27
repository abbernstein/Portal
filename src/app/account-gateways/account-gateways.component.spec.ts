import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGatewaysComponent } from './account-gateways.component';

describe('AccountGatewaysComponent', () => {
  let component: AccountGatewaysComponent;
  let fixture: ComponentFixture<AccountGatewaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGatewaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
