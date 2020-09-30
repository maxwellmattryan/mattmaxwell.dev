import { BlogPost } from '../models/blog-post.model';
import { PortfolioProfile } from '@app/modules/portfolio/models';

export interface Homepage {
    posts: BlogPost[];
    profile: PortfolioProfile;
}
