import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service.service';

@Component({
  // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styles: [`
  `]
})
export class EventsListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  handleEventClicked(data) {
    console.log('received: ' + data);
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
