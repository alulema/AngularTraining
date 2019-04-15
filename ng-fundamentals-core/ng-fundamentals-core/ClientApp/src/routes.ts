import {EventsListComponent} from "./app/events";
import {EventDetailsComponent} from "./app/events/event-details";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./app/events";
import {Error404Component} from "./app/errors/errors.component";
import {EventRouteActivator} from "./app/events/event-details";
import {EventsListResolver} from "./app/events";
import {CreateSessionComponent} from "./app/events/event-details";

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
