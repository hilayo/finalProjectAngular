import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClothComponent } from './select-cloth.component';

describe('SelectClothComponent', () => {
  let component: SelectClothComponent;
  let fixture: ComponentFixture<SelectClothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
