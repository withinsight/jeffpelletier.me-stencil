import { Component } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css'
})
export class AppHome {
    render() {
        return (
            <div>
                <jp-content-h2 title="UX Designer &amp; Developer" />

                <p>I'm a designer who's been coding professionally for over 15 years. <br /> I love technology, and write about it (when lightning strikes).</p>

                <p>I've been experimenting and built 3 different versions of my portfolio. You're currently viewing the <a data-hook="link-external" href="https://stenciljs.com/" rel="external">Stencil</a> version.</p>

                <p>These additional versions are available (note which version you're viewing via the URL bar):</p>

                <ul>
                    <li><a href="http://jeffpelletier.me">Vanilla HTML/CSS/JS Portfolio</a></li>
                    <li><a href="http://gatsby.jeffpelletier.me">Gatsby Portfolio</a>. More about <a data-hook="link-external" href="https://www.gatsbyjs.org/" rel="external">Gatsby</a>.</li>
                </ul>

                <p>Check out some of my recent <stencil-route-link url="/work">work</stencil-route-link>, some of the <stencil-route-link url="/writing">words I've written</stencil-route-link>, and <a href="mailto:jeffrey.k.pelletier+folio@gmail.com">get in touch</a> if you want to chat.</p>
            </div>
        );
    }
}
