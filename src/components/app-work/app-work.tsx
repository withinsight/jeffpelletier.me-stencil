import { Component } from '@stencil/core';

@Component({
    tag: 'app-work',
    styleUrl: 'app-work.css'
})

export class AppWork {
    render() {
        return (
            <div>
                <jp-content-h2 title="Work"></jp-content-h2>

                <p>A sampling of work (that's publicly accessible) I've contributed to in recent years.</p>
            </div>
        );
    }
}
