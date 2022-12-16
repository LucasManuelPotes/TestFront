import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciComponent } from './experienci.component';

describe('ExperienciComponent', () => {
  let component: ExperienciComponent;
  let fixture: ComponentFixture<ExperienciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
