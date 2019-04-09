import { Component } from '@stencil/core';

@Component({
    tag: 'jp-header',
    styleUrl: 'jp-header.css'
})

export class Header {
    render() {
        return (
            <header class="Header">
                <h1 class="Header-h1">
                    <a href="index.html">Jeff<br /> Pelletier</a>
                </h1>

                <jp-racing-stripe></jp-racing-stripe>
                <jp-nav-primary></jp-nav-primary>
            </header>
        )
    }
}
