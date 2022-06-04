import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LougoutComponent } from './lougout.component';

describe('LougoutComponent', () => {
  let component: LougoutComponent;
  let fixture: ComponentFixture<LougoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LougoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LougoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
