import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'jp-blog-post-list-item',
    styleUrl: 'jp-blog-post-list-item.css'
})

export class BlogPostListItem {
    @Prop() postTitle: string = '';
    @Prop() postLink: string = '';
    @Prop() pubDate: string = '';

    render() {
        return (
            <li>
                <a data-hook="link-external"
                    href={this.postLink}
                    rel="external">{this.postTitle}</a>, <em class="BlogPostList-pubDate">published {this.pubDate}</em>
            </li>
        );
    }
}
