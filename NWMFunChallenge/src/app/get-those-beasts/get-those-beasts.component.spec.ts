import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThoseBeastsComponent } from './get-those-beasts.component';

describe('GetThoseBeastsComponent', () => {
  let component: GetThoseBeastsComponent;
  let fixture: ComponentFixture<GetThoseBeastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetThoseBeastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetThoseBeastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
