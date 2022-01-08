import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  // Input
  @Input() text!: string;
}
