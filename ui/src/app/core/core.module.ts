import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';

import { AuthService, AuthInterceptorService } from './auth';
import {
    FooterComponent,
    HeaderComponent,
    IconComponent,
    LoadingSpinnerComponent
} from './components';
import {
    NotificationService,
} from './services';
import { HttpErrorInterceptorService } from '@ui/core/http/http-error-interceptor.service';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        IconComponent,
        LoadingSpinnerComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        IconComponent,
        LoadingSpinnerComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: function(notificationService: NotificationService) {
                return new HttpErrorInterceptorService(notificationService);
            },
            multi: true,
            deps: [NotificationService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: function(router: Router, authService: AuthService, notificationService: NotificationService) {
                return new AuthInterceptorService(router, authService, notificationService);
            },
            multi: true,
            deps: [Router, AuthService, NotificationService]
        }
    ]
})
export class CoreModule { }
