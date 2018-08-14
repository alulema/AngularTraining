import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service.service';
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "./shared";

@Component({
  // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styles: [`
  `]
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  handleEventClicked(data) {
    console.log('received: ' + data);
  }

  ngOnInit(): void {
    // this.events = this.eventService.getEvents().subscribe(events => {
    //     this.events = events;
    // });

      this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
