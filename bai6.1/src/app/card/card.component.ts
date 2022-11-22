import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // @ts-ignore
  @Input() cardName:string;
  // @ts-ignore
  @Input() email:string;
  // @ts-ignore
  @Input()  phone:string;
}
