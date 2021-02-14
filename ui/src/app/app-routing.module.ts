import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@ui/modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('@ui/modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('@ui/modules/blog/blog.module').then(m => m.BlogModule)
    },
    {
        path: 'portfolio',
        loadChildren: () => import('@ui/modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
    },
    {
        path: 'store',
        loadChildren: () => import('@ui/modules/store/store.module').then(m => m.StoreModule)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }