import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-super-agent-page',
  standalone: true,
  imports: [],
  templateUrl: './super-agent-page.component.html',
  styleUrl: './super-agent-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperAgentPageComponent {}
