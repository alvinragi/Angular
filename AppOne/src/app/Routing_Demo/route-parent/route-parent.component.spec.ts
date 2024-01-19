import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParentComponent } from './route-parent.component';

describe('RouteParentComponent', () => {
  let component: RouteParentComponent;
  let fixture: ComponentFixture<RouteParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteParentComponent]
    });
    fixture = TestBed.createComponent(RouteParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
