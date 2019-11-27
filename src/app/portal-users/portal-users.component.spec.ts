import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUsersComponent } from './portal-users.component';

describe('PortalUsersComponent', () => {
  let component: PortalUsersComponent;
  let fixture: ComponentFixture<PortalUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
