import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseClothViewComponent } from './choose-cloth-view.component';

describe('ChooseClothViewComponent', () => {
  let component: ChooseClothViewComponent;
  let fixture: ComponentFixture<ChooseClothViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseClothViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseClothViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
