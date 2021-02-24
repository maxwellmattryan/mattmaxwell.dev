import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '@ui/core/services';

import { ShopApiService } from '../../services';

export type FaqCategory = 'bugs' | 'compatibility' | 'installation' | 'purchasing';

@Component({
    selector: 'ui-shop-faq-view',
    templateUrl: './shop-faq-view.component.html',
    styleUrls: ['./shop-faq-view.component.scss']
})
export class ShopFaqViewComponent implements OnInit {
    private answerShowClass: string = 'faq__category-info-q-container--show';
    private answerHiddenClass: string = 'faq__category-info-q-container--hidden';

    private categoryShowClass: string = 'faq__category-info--show';
    private categoryHiddenClass: string = 'faq__category-info--hidden';

    public emailForm: FormGroup;
    public hasSubmittedEmail: boolean = false;

    constructor(
        private readonly notificationService: NotificationService,
        private readonly shopApiService: ShopApiService,
        private readonly titleService: Title,
        private readonly formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('Shop FAQ | Matthew Maxwell');

        this.initEmailForm();
    }

    private initEmailForm(): void {
        this.emailForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email])
        });
    }

    public onEmailSubmit(): void {
        this.hasSubmittedEmail = true;

        const email = (this.emailForm.value as any).email;
        this.shopApiService.helpCustomer(email).subscribe((res: void) => {
            this.initEmailForm();
            this.notificationService.createNotification('Successfully sent download URL(s) to email! It may take a moment to show up in your inbox.', '', 3600);
        }, (error: HttpErrorResponse) => {
            this.notificationService.createNotification(error.error.message);
        });
    }

    public toggleCategory(category: FaqCategory, event: Event): void {
        const id = `faq__${category}`;
        const faqCategory = document.getElementById(id);
        let isHidden = this.elementContainsStyles(faqCategory, 'category');

        (<HTMLInputElement>event.target).innerHTML = isHidden ? '&#8722;' : '&#x2b;';

        this.modifyStyles(
            faqCategory,
            isHidden ? this.categoryShowClass : this.categoryHiddenClass,
            isHidden ? this.categoryHiddenClass : this.categoryShowClass
        );
    }

    public toggleAnswer(elementId: string, event: Event): void {
        let faqAnswer = document.getElementById(elementId);
        let isHidden = this.elementContainsStyles(faqAnswer, 'answer');

        (<HTMLInputElement>event.target).innerHTML = isHidden ? '&#8722;' : '&#x2b;';

        this.modifyStyles(
            faqAnswer,
            isHidden ? this.answerShowClass : this.answerHiddenClass,
            isHidden ? this.answerHiddenClass : this.answerShowClass
        );
    }

    private elementContainsStyles(elem: HTMLElement, type: 'category' | 'answer'): boolean {
        const isCategory = type == 'category';
        const showClass = isCategory ? this.categoryShowClass : this.answerShowClass;
        const hiddenClass = isCategory ? this.categoryHiddenClass : this.answerHiddenClass;

        return elem.classList.contains(hiddenClass) || !elem.classList.contains(showClass);
    }

    private modifyStyles(elem: HTMLElement, addClass: string, removeClass: string): void {
        elem.classList.remove(removeClass);
        elem.classList.add(addClass);
    }
}
