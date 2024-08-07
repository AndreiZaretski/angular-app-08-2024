import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilterComponent } from './show-filter.component';

describe('ShowFilterComponent', () => {
  let component: ShowFilterComponent;
  let fixture: ComponentFixture<ShowFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
