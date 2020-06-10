import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    NavbarComponent
} from './components';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NavigationRoutingModule { }