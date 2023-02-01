import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBoxComponent } from './big-box.component';

describe('BigBoxComponent', () => {
  let component: BigBoxComponent;
  let fixture: ComponentFixture<BigBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
