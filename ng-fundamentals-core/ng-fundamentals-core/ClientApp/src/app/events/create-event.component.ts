import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventService, IEvent, ISession} from "./shared";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }

        .error input {
            background-color: #E3C3C5
        }

        .error ::-webkit-input-placeholder {
            color: #999
        }

        .error ::-moz-placeholder {
            color: #999
        }

        .error :-moz-placeholder {
            color: #999
        }

        .error :-ms-input-placeholder {
            color: #999
        }
    `]
})
export class CreateEventComponent implements OnInit{
    event: any;
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues): void {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    ngOnInit(): void {
        // this.event = {
        //     name: 'Ng Spectacular',
        //     date: '11/11/2021',
        //     time: '10am',
        //     price: 800,
        //     location: {
        //         address: 'test',
        //         city: 'test',
        //         country: 'test'
        //     },
        //     onlineUrl: 'http://www.s.com',
        //     imageUrl: 'http://www.s.com/itr.png'
        // };
    }
}
