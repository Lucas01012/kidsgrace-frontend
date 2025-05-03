import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReutComponent } from './card-reut.component';

describe('CardReutComponent', () => {
  let component: CardReutComponent;
  let fixture: ComponentFixture<CardReutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
