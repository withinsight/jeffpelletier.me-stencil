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
                        <a class="NavPrimary-link"
                            href="work.html">Work
                        </a>
                    </li>
                    <li class="NavPrimary-item">
                        <a class="NavPrimary-link"
                            href="writing.html">Writing
                        </a>
                    </li>
                    <li class="NavPrimary-item">
                        <a class="NavPrimary-link"
                            href="radical.html">Radical
                        </a>
                    </li>
                    <li class="NavPrimary-item">
                        <a class="NavPrimary-link"
                            href="assets/Pelletier-Jeffrey.pdf">Resume
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
