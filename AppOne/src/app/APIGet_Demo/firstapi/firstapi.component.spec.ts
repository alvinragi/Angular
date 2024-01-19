import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstapiComponent } from './firstapi.component';

describe('FirstapiComponent', () => {
  let component: FirstapiComponent;
  let fixture: ComponentFixture<FirstapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstapiComponent]
    });
    fixture = TestBed.createComponent(FirstapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
