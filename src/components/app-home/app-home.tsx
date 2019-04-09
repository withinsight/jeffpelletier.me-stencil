import { Component } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css'
})
export class AppHome {
    render() {
        return (
            <div>
                <jp-content-h2 title="UX Designer &amp; Developer"></jp-content-h2>

                <p>I'm a designer who's been coding professionally for over 15 years. <br /> I love technology, and write about it (when lightning strikes).</p>

                <p>You're viewing the Stencil version of my portfolio. There's also <a href="http://jeffpelletier.me">a static HTML version</a>, if that's your flavor.</p>

                <p>Check out some of my recent <stencil-route-link url="/work">work</stencil-route-link>, some of the <stencil-route-link url="/writing">words I've written</stencil-route-link>, and <a href="mailto:jeffrey.k.pelletier+folio@gmail.com">get in touch</a> if you want to chat.</p>
            </div>
        );
    }
}
