import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCatagoriesComponent } from './search-by-catagories.component';

describe('SearchByCatagoriesComponent', () => {
  let component: SearchByCatagoriesComponent;
  let fixture: ComponentFixture<SearchByCatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByCatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
