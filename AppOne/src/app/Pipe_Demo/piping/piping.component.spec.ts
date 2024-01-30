import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingComponent } from './piping.component';

describe('PipingComponent', () => {
  let component: PipingComponent;
  let fixture: ComponentFixture<PipingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipingComponent]
    });
    fixture = TestBed.createComponent(PipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
