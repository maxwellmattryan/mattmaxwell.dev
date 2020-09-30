import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '@app/core/auth';
import { Project } from '@app/shared/models';
import { SeoService, TrackingService } from '@app/core/services';

@Component({
    selector: 'app-project-collection',
    templateUrl: './project-collection.component.html',
    styleUrls: ['./project-collection.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCollectionComponent implements OnInit {
    @Input() projects: Project[];

    constructor(
        public authService: AuthService,
        private seoService: SeoService,
        public trackingService: TrackingService
    ) { }

    ngOnInit(): void { }

    getProjectUrl(id: number, name: string): string {
        return `portfolio/projects/${this.seoService.getCanonicalUrl(id, name)}`;
    }
}
