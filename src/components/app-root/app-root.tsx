import { Component } from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css'
})
export class AppRoot {
    render() {
        return (
            <div class="container">
                <jp-header />

                <jp-content>
                    <stencil-router>
                        <stencil-route-switch scrollTopOffset={0}>
                            <stencil-route url='/' component='app-home' exact={true} />
                            <stencil-route url='/work' component='app-work' />
                            <stencil-route url='/writing' component='app-writing' />
                            <stencil-route url='/radical' component='app-radical' />
                        </stencil-route-switch>
                    </stencil-router>
                </jp-content>

                <jp-footer />
            </div>
        );
    }
}
