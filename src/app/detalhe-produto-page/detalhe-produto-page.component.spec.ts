import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProdutoPageComponent } from './detalhe-produto-page.component';

describe('DetalheProdutoPageComponent', () => {
  let component: DetalheProdutoPageComponent;
  let fixture: ComponentFixture<DetalheProdutoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheProdutoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheProdutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
