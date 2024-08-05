import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentPageComponent } from './sub-agent-page.component';

describe('SubAgentPageComponent', () => {
  let component: SubAgentPageComponent;
  let fixture: ComponentFixture<SubAgentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubAgentPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubAgentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
