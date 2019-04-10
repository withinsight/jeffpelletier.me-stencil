import { Component } from '@stencil/core';

@Component({
    tag: 'app-radical',
    styleUrl: 'app-radical.css'
})

export class AppRadical {
    render() {
        return (
            <div>
                <jp-content-h2 title="Radical" />

                <p>While I was at Intridea/Mobomo, I led the frontend track of our weekly team meetups. During this time, I presented on a variety of subjects, from OOCSS, to Design Systems to Ionic.</p>

                <p>Check out the deck from my <a data-hook="link-external" href="https://withinsight.github.io/design-systems" rel="external">Design Systems</a> presentation.</p>
            </div>
        );
    }
}
