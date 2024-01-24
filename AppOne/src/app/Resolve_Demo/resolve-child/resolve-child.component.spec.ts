import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveChildComponent } from './resolve-child.component';

describe('ResolveChildComponent', () => {
  let component: ResolveChildComponent;
  let fixture: ComponentFixture<ResolveChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolveChildComponent]
    });
    fixture = TestBed.createComponent(ResolveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
