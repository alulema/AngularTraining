import {Component} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65
        }
    `]
})
export class LoginComponent {
    username: string;
    password: string
    mouseoverLogin: boolean;

    constructor(private authService: AuthService, private router: Router) {
    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);

    }
}
