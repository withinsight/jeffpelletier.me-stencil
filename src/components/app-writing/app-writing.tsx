import { Component } from '@stencil/core';

@Component({
    tag: 'app-writing',
    styleUrl: 'app-writing.css'
})

export class AppWriting {
    render() {
        return (
            <div>
                <jp-content-h2 title="Writing" />

                <p>I've been blogging in a variety of locations, and even published a book, all of which is collected here.</p>

                <jp-divider />

                <h3>Medium Posts</h3>

                <jp-blog-post-highlight
                    postLink="https://hackernoon.com/design-systems-should-be-javascript-framework-agnostic-2a0c47129ec8"
                    postTitle="Design Systems Should be JavaScript Framework Agnostic"
                    pubDate="September 3, 2018">
                    <ul class="BlogPostHighlight-list">
                        <li>Over 4k views on Medium</li>
                        <li>Applauded by Jina Anne</li>
                        <li>Stuart Robson mentioned at <a data-hook="link-external" href="https://noti.st/sturobson/yc1gwN/design-systems-and-front-end-architecture#sw9OLnn" rel="external">Colchester Digital Conference</a></li>
                    </ul>
                </jp-blog-post-highlight>

                <jp-blog-post-highlight
                    postLink="https://hackernoon.com/front-end-roles-and-responsibilities-6ee8654f1649"
                    postTitle="Front-end Roles and Responsibilities"
                    pubDate="January 7, 2017">
                    <ul class="BlogPostHighlight-list">
                        <li>Over 20k views on Medium</li>
                        <li>Applauded by Chris Coyier</li>
                        <li>Lara Schenck mentioned in her <a href="https://github.com/laras126/front-end-discourse" rel="external" data-hook="link-external">Frontend Discourse repo</a></li>
                        <li>Chris Coyier mentioned in his <a href="https://css-tricks.com/getting-nowhere-job-titles/" rel="external" data-hook="link-external">Getting Nowhere on Job Titles</a> blog post</li>
                    </ul>
                </jp-blog-post-highlight>

                <jp-blog-post-highlight
                    postLink="https://medium.com/@withinsight1/the-front-end-spectrum-c0f30998c9f0"
                    postTitle="The Front-end Spectrum"
                    pubDate="November 1, 2015">
                    <ul class="BlogPostHighlight-list">
                        <li>Over 18k views on Medium</li>
                        <li>Katie Sylor-Miller mentioned at <a href="https://vimeo.com/181329000" rel="external" data-hook="link-external">Frontend Conf Zurich</a></li>
                        <li>Cody Lindley included in the "Tools" section of the <a href="https://frontendmasters.com/books/front-end-handbook/2017/tools.html" rel="external" data-hook="link-external">Frontend Handbook</a></li>
                    </ul>
                </jp-blog-post-highlight>

                <jp-divider />

                <h3>Intridea/Mobomo-era Posts</h3>

                <ul class="BlogPostList">
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2016/10/importing-basscss-npm-ionic-2/"
                        postTitle="Importing Basscss From NPM In Ionic 2"
                        pubDate="October 27, 2016" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2016/08/ionic-2-linting-without-reliance-on-rails/"
                        postTitle="Ionic 2 Linting Without Reliance On Rails"
                        pubDate="August 30, 2016" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2016/06/ways-css-benefits-enterprise/"
                        postTitle="Ways Modular CSS Benefits Your Enterprise"
                        pubDate="June 27, 2016" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2016/05/bootstrap-performance/"
                        postTitle="Break The Bootstrap Mold And Optimize Performance"
                        pubDate="May 24, 2016" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2015/08/setup-ngcordova-in-ionic/"
                        postTitle="Setup ngCordova in Ionic"
                        pubDate="August 11, 2015" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2015/08/ionic-experiments-ionic-materials/"
                        postTitle="Ionic Experiments: Ionic Material, Angular Material, and Polymer"
                        pubDate="August 04, 2015" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2015/05/the-ionic-cli/"
                        postTitle="The Ionic CLI"
                        pubDate="May 19, 2015" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2015/02/an-introduction-to-advance-front-end-developer-tools/"
                        postTitle="An Introduction to Advanced Front-End Developer Tools"
                        pubDate="February 10, 2015" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2015/02/an-introduction-to-front-end-developer-tools/"
                        postTitle="An Introduction to Front-End Developer Tools"
                        pubDate="February 05, 2015" />
                    <jp-blog-post-list-item
                        postLink="https://www.mobomo.com/2014/08/html5-apps-develop-once-deploy-everywhere/"
                        postTitle="HTML5 Apps: Develop Once, Deploy Everywhere"
                        pubDate="HTML5 Apps: Develop Once, Deploy Everywhere" />
                </ul>

                <jp-divider />

                <h3>Book</h3>

                <p>In 2013, I self-published a book sharing all I learned while developing hybrid mobile applications during my time at NESN. Check out <a href="https://mobileappmanual.com/" rel="external" data-hook="link-external">Mobile App Manual</a>.</p>
            </div>
        );
    }
}
