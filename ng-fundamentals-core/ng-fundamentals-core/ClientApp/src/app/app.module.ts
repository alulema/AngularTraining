import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import * as LocalLib from './events/index'

import {EventsAppComponent} from './events/events-app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ToastrService} from './common/toastr.service.service';
import {appRoutes} from "../routes";
import {Error404Component} from './errors/errors.component';
import {AuthService} from "./user/auth.service";

@NgModule({
    declarations: [
        EventsAppComponent,
        LocalLib.EventsListComponent,
        LocalLib.EventsThumbnailComponent,
        NavbarComponent,
        LocalLib.EventDetailsComponent,
        LocalLib.CreateEventComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        LocalLib.EventService,
        ToastrService,
        LocalLib.EventRouteActivator,
        LocalLib.EventsListResolver,
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: LocalLib.CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');

    return true;
}
