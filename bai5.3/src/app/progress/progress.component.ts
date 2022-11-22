import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() backgroundColor = 'rgba(34,255,0,0.3)';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;
  loading(){
    let interval = setInterval(()=>{
      this.progress = +this.progress+5;
      if(this.progress==100){
          clearInterval(interval);
      }
    },1000);
  }
}
