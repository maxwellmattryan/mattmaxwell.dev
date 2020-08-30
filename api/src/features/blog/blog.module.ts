import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlogPostController } from './controllers/blog-post.controller';

import { BlogAuthor } from './entities/blog-author.entity';
import { BlogPost } from './entities/blog-post.entity';
import { BlogPostStatus } from './entities/blog-post-status.entity';
import { BlogTopic } from './entities/blog-topic.entity';

import { BlogService } from './services/blog.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogAuthor, BlogPost, BlogPostStatus, BlogTopic])
    ],
    exports: [
        BlogService
    ],
    controllers: [
        BlogPostController
    ],
    providers: [
        BlogService
    ]
})
export class BlogModule { }