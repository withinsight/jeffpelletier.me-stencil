import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'jp-blog-post-highlight',
    styleUrl: 'jp-blog-post-highlight.css'
})

export class BlogPostHighlight {
    @Prop() postTitle: string = '';
    @Prop() postLink: string = '';
    @Prop() pubDate: string = '';

    render() {
        return (
            <div class="BlogPostHighlight">
                <h4 class="BlogPostHighlight-title">
                    <a data-hook="link-external"
                        href={this.postLink}
                        rel="external">{this.postTitle}
                    </a>
                </h4>
                <em class="BlogPostHighlight-pubDate">published {this.pubDate}</em>
                <p class="BlogPostHighlight-listTitle"><strong>Highlights:</strong></p>
                <slot />
            </div>
        );
    }
}
