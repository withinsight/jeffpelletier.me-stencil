import { Component } from '@stencil/core';

@Component({
    tag: 'jp-nav-primary',
    styleUrl: 'jp-nav-primary.css'
})

export class NavPrimary {
    render() {
        return (
            <nav class="NavPrimary">
                <ul class="NavPrimary-list">
                    <li class="NavPrimary-item">
                        <stencil-route-link
                            anchorClass="NavPrimary-link"
                            url="work">Work
                        </stencil-route-link>
                    </li>
                    <li class="NavPrimary-item">
                        <stencil-route-link
                            anchorClass="NavPrimary-link"
                            url="writing">Writing
                        </stencil-route-link>
                    </li>
                    <li class="NavPrimary-item">
                        <stencil-route-link
                            anchorClass="NavPrimary-link"
                            url="radical">Radical
                        </stencil-route-link>
                    </li>
                    <li class="NavPrimary-item">
                        <a class="NavPrimary-link"
                            href="assets/Pelletier-Jeffrey.pdf">Resume
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
