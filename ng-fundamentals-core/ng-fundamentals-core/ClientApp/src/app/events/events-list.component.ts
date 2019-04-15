import { Component, OnInit } from '@angular/core';
import { EventService } from './shared';
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

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.events = this.route.snapshot.data['events'];
  }
}
