import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinkComponent } from './my-link.component';

describe('MyLinkComponent', () => {
  let component: MyLinkComponent;
  let fixture: ComponentFixture<MyLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
