import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAgentPageComponent } from './super-agent-page.component';

describe('SuperAgentPageComponent', () => {
  let component: SuperAgentPageComponent;
  let fixture: ComponentFixture<SuperAgentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAgentPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperAgentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
