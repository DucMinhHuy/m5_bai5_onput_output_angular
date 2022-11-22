import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnti} from "../irating-unti";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit,OnChanges{
    @Input()max=10;
    @Input() ratingValue=5;
    @Input() showRatingValue=true;
    @Output() rateChange =new EventEmitter<number>();
    ratingUnits :Array<IRatingUnti>=[];
    constructor() {
    }
    ngOnChanges(changes: SimpleChanges) {
      if('max' in changes){
        // @ts-ignore
        let max =changes.max.currentValue;
        max=typeof max=='undefined'? 5:max;
        this.max=max;
        this.calculate(max,this.ratingValue);
      }
    }
// @ts-ignore
  calculate(max,ratingValue){
      this.ratingUnits=Array.from({length:max},
        ( _, index)=>({
          value:index +1,
          active: index<ratingValue
        }));
}
  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }
  // @ts-ignore
  select(index){
      this.ratingValue=index+1;
      this.ratingUnits.forEach((item,idx)=>item.active=idx<this.ratingValue);
this.rateChange.emit(this.ratingValue);
  }
  // @ts-ignore
  enter(index){
      this.ratingUnits.forEach((item,idx)=>item.active=idx<=index);
  }
  reset(){
      this.ratingUnits.filter((item,idx)=>item.active=idx<this.ratingValue);
  }
}