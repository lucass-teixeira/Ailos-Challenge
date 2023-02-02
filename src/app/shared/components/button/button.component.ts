import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title!: string;
  @Input() disabled: boolean = true;
  @Input() buttonType: 'primary' | 'secondary' = 'primary';
  @Input() fill: 'expand' | 'pattern' = 'expand';
  constructor() { }

  ngOnInit(): void {
  }

}
