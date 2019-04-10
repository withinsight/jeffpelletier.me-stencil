import { Component } from '@stencil/core';

@Component({
    tag: 'jp-divider',
    styleUrl: 'jp-divider.css'
})

export class Divider {
    render() {
        return (
            <hr class="Divider" />
        );
    }
}
