import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'jp-card',
    styleUrl: 'jp-card.css'
})

export class Card {
    @Prop() clientTitle: string = '';
    @Prop() projectLink: string = '';
    @Prop() projectTitle: string = '';
    @Prop() imageSrc: string = '';
    @Prop() imageAltText: string = '';
    @Prop() imageAlignRight: boolean = false;

    render() {
        return (
            <div class="Card">
                <h3 class="Card-title">
                    Client: {this.clientTitle}. Project: <a href={this.projectLink} data-hook="link-external" rel="external">{this.projectTitle}</a>
                </h3>
                <div class="Card-content">
                    <img src={this.imageSrc} alt={this.imageAltText} class={`Card-image ${this.imageAlignRight ? 'Card-image--right' : ''}`} />
                    <div class="Card-summary">
                        <slot />
                    </div>
                </div>
            </div>
        );
    }
}
