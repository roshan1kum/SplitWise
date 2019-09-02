import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFriendDetailComponent } from './show-friend-detail.component';

describe('ShowFriendDetailComponent', () => {
  let component: ShowFriendDetailComponent;
  let fixture: ComponentFixture<ShowFriendDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFriendDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFriendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
