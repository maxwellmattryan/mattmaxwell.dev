import { Controller, Get, HttpCode, Param, Req, Query, Put, UseGuards, Post } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@api/core/auth/jwt/jwt-auth.guard';

import { BlogPost } from '../entities/blog-post.entity';
import { BlogPostStatus } from '../entities/blog-post-status.entity';
import { BlogPostService } from '../services/blog-post.service';
import {
    BlogPostCouldNotBeUpdated, BlogPostStatusesWereNotFoundException,
    BlogPostsWereNotFoundException,
    BlogPostWasNotFoundException
} from '../exceptions/blog-post.exception';

@Controller('blog/posts')
export class BlogPostController {
    constructor(
        private readonly blogPostService: BlogPostService
    ) { }

    @Get('')
    @HttpCode(200)
    async getPublishedPosts(
        @Query('topic_id') topicId: string,
        @Query('published') published: string,
        @Req() request: Request
    ): Promise<BlogPost[]> {
        let posts: BlogPost[];

        if(published !== undefined) {
            if(topicId) {
                posts = await this.blogPostService.getPostsByStatusAndTopic('PUBLISHED', parseInt(topicId));
            } else {
                posts = await this.blogPostService.getPostsByStatus('PUBLISHED');
            }
        } else {
            if(topicId) {
                posts = await this.blogPostService.getPostsByTopic(parseInt(topicId));
            } else {
                posts = await this.blogPostService.getPosts();
            }
        }

        if(posts.length == 0) throw new BlogPostsWereNotFoundException();

        return posts;
    }

    @Post('')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async createPost(@Req() request: Request): Promise<BlogPost> {
        return await this.blogPostService.createPost(request.body);
    }

    @Get(':id')
    @HttpCode(200)
    async getPost(@Param('id') id: number, @Req() request: Request): Promise<BlogPost> {
        const post = await this.blogPostService.getPost(id);
        if(!post) throw new BlogPostWasNotFoundException();

        return post;
    }

    @Put(':id')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async updatePost(@Param('id') id: number, @Req() request: Request): Promise<BlogPost> {
        const post = await this.blogPostService.updatePost(id, request.body);
        if(!post) throw new BlogPostCouldNotBeUpdated();

        return post;
    }

    @Get('statuses')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async getPostStatuses(@Req() request: Request): Promise<BlogPostStatus[]> {
        const statuses = await this.blogPostService.getStatuses();
        if(statuses.length === 0) throw new BlogPostStatusesWereNotFoundException();

        console.log(statuses);
        return statuses;
    }
}