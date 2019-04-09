import { Component } from '@stencil/core';

@Component({
    tag: 'jp-nav-secondary',
    styleUrl: 'jp-nav-secondary.css'
})

export class NavSecondary {
    render() {
        return (
            <ul class="NavSecondary">
                <li class="NavSecondary-item">
                    <a class="NavSecondary-link NavSecondary-linkTwitter"
                        data-hook="link-external"
                        href="https://twitter.com/withinsight"
                        rel="external">Twitter
                    </a>
                </li>
                <li class="NavSecondary-item">
                    <a class="NavSecondary-link NavSecondary-linkGithub"
                        data-hook="link-external"
                        href="https://github.com/withinsight/"
                        rel="external">GitHub
                    </a>
                </li>
                <li class="NavSecondary-item">
                    <a class="NavSecondary-link NavSecondary-linkLinkedin"
                        data-hook="link-external"
                        href="https://www.linkedin.com/in/withinsight/"
                        rel="external">LinkedIn
                    </a>
                </li>
            </ul>
        )
    }
}
