import { Component } from '@stencil/core';

@Component({
    tag: 'jp-content',
    styleUrl: 'jp-content.css'
})

export class Content {
    render() {
        return (
            <section class="Content">
                <slot />
            </section>
        );
    }
}
