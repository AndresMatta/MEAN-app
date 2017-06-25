import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";
import { MessagesComponent } from "./messages/messages.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/messages', pathMatch: 'full' },
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
	{ path: 'messages', component: MessagesComponent },	
];

export const Routing = RouterModule.forRoot(APP_ROUTES);  