import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrummersComponent } from './scrummers.component';

describe('ScrummersComponent', () => {
  let component: ScrummersComponent;
  let fixture: ComponentFixture<ScrummersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrummersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrummersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
