import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit,OnChanges{


  // @ts-ignore
  @Input() item: string;
  constructor() {
  }
  ngOnInit() {
    console.log({item :this.item})
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('huy',{item :this.item})
  }
}
