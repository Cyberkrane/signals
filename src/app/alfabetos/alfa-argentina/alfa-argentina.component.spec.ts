import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaArgentinaComponent } from './alfa-argentina.component';

describe('AlfaArgentinaComponent', () => {
  let component: AlfaArgentinaComponent;
  let fixture: ComponentFixture<AlfaArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaArgentinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
