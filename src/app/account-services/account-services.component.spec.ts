import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountServicesComponent } from './account-services.component';

describe('AccountServicesComponent', () => {
  let component: AccountServicesComponent;
  let fixture: ComponentFixture<AccountServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
