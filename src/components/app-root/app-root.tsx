import { Component } from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css'
})
export class AppRoot {
    render() {
        return (
            <div>
                <jp-header></jp-header>

                <main>
                    <stencil-router>
                        <stencil-route-switch scrollTopOffset={0}>
                        <stencil-route url='/' component='app-home' exact={true} />
                        <stencil-route url='/profile/:name' component='app-profile' />
                        </stencil-route-switch>
                    </stencil-router>
                </main>

                <jp-footer></jp-footer>
            </div>
        );
    }
}
