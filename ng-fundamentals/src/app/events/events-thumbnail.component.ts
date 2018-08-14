import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from "./shared";

@Component({
  selector: 'app-events-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div>Time: {{event?.time}}</div>
      <div class="well"
           [ngStyle]="{
              'color': event?.time === '8:00 am' ? '#003300' : '#b54',
              'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal' }"
           [ngClass]="getStartTimeClass()"
           [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <!--<div *ngIf="event?.location"> -->
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
      </div>
    </div>
  `,
  styles: [`
    .thumbnail {
      min-height: 210px;
    }

    .pad-left {
      margin-left: 10px;
    }

    .well div {
      color: #bbb;
    }

    .green {
      color: #003300 !important;
    }

    .bold {
      font-weight: bold;
    }
  `]
})
export class EventsThumbnailComponent {

  @Input() event: IEvent;
  someProperty: any = 'some value';

  logFoo() {
    console.log('foo');
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }

  // @Output() eventClick = new EventEmitter();

  // handleClickMe() {
  //   this.eventClick.emit(this.event.name);
  // }
}
