import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaBrasilComponent } from './alfa-brasil.component';

describe('AlfaBrasilComponent', () => {
  let component: AlfaBrasilComponent;
  let fixture: ComponentFixture<AlfaBrasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaBrasilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfaBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
