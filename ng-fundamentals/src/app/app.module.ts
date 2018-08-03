import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {EventsAppComponent} from './events/events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventsThumbnailComponent} from './events/events-thumbnail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {appRoutes} from "../routes";
import {CreateEventComponent} from './create-event/create-event.component';
import {Error404Component} from './errors/errors.component';
import {EventRouteActivator} from "./events/event-details/event-route-activator.service";
import {EventsListResolver} from "./events/events-list-resolver.service";

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventsListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');

    return true;
}
