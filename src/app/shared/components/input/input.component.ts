import { Component, OnInit, Input , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: 'number' | 'text' | 'email' = 'text';
  @Input() label!: string;
  @Input() placeholder!: string;

  value: string;

  inputChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  inputChanges(text: any){
    this.inputChanged.next(text.toString())
  }

}
