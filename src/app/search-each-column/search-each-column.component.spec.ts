import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEachColumnComponent } from './search-each-column.component';

describe('SearchEachColumnComponent', () => {
  let component: SearchEachColumnComponent;
  let fixture: ComponentFixture<SearchEachColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEachColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEachColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
