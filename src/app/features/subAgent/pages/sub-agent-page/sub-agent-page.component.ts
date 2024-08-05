import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sub-agent-page',
  standalone: true,
  imports: [],
  templateUrl: './sub-agent-page.component.html',
  styleUrl: './sub-agent-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubAgentPageComponent {}
