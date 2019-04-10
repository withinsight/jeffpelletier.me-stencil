import { Component } from '@stencil/core';

@Component({
    tag: 'jp-racing-stripe',
    styleUrl: 'jp-racing-stripe.css'
})

export class RacingStripe {
    render() {
        return (
            <div class="RacingStripe">
                <stencil-route-link url="/">
                    <div class="RacingStripe-badge">
                        <span class="RacingStripe-badgeNumber">11</span>
                    </div>
                </stencil-route-link>
                <span class="RacingStripe-hashes">
                    <span class="RacingStripe-hash"></span>
                    <span class="RacingStripe-hash"></span>
                    <span class="RacingStripe-hash"></span>
                    <span class="RacingStripe-hash"></span>
                    <span class="RacingStripe-hash"></span>
                </span>
            </div>
        );
    }
}
