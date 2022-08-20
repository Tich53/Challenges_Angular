import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockComponentsComponent } from './block-components.component';

describe('BlockComponentsComponent', () => {
  let component: BlockComponentsComponent;
  let fixture: ComponentFixture<BlockComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
