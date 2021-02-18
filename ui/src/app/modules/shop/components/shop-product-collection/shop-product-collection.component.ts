import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@ui/core/auth';

import { SeoService, TrackingService } from '@ui/core/services';

import { ShopProduct } from '../../models';

@Component({
    selector: 'ui-shop-product-collection',
    templateUrl: './shop-product-collection.component.html',
    styleUrls: ['./shop-product-collection.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopProductCollectionComponent implements OnInit {
    @Input() products: ShopProduct[];

    // CAUTION: This is necessary because the routing changes when this component is used outside of the shop module
    @Input() baseRoute: string = 'shop/products';

    public isAdmin: boolean = false;

    constructor(
        private readonly authService: AuthService,
        private readonly seoService: SeoService,
        public readonly trackingService: TrackingService
    ) { }

    ngOnInit(): void {
        this.isAdmin = this.authService.isLoggedIn();
    }

    getProductUrl(id: number, name: string): string {
        return `${this.baseRoute}/${this.seoService.getCanonicalUrl(id, name)}`;
    }

    public sendProductToEditor(product: ShopProduct): void {
        console.log(-1);
    }

    public deleteProduct(product: ShopProduct): void {
        console.log(-1);
    }
}
