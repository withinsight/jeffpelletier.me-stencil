import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'jp-content-h2',
    styleUrl: 'jp-content-h2.css'
})

export class ContentH2 {
    @Prop() title: string = '';

    render() {
        return (
            <h2 class="Content-h2">{this.title}</h2>
        );
    }
}
