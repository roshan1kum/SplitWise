import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendExpenseComponent } from './add-friend-expense.component';

describe('AddFriendExpenseComponent', () => {
  let component: AddFriendExpenseComponent;
  let fixture: ComponentFixture<AddFriendExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
