import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveBarComponent } from './interactive-bar.component';

describe('InteractiveBarComponent', () => {
  let component: InteractiveBarComponent;
  let fixture: ComponentFixture<InteractiveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
