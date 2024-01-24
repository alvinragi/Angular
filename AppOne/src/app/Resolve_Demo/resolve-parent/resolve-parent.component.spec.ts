import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveParentComponent } from './resolve-parent.component';

describe('ResolveParentComponent', () => {
  let component: ResolveParentComponent;
  let fixture: ComponentFixture<ResolveParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolveParentComponent]
    });
    fixture = TestBed.createComponent(ResolveParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
