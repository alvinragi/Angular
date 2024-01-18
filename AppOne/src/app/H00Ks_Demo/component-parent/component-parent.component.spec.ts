import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParentComponent } from './component-parent.component';

describe('ComponentParentComponent', () => {
  let component: ComponentParentComponent;
  let fixture: ComponentFixture<ComponentParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentParentComponent]
    });
    fixture = TestBed.createComponent(ComponentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
