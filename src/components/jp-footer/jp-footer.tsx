import { Component } from '@stencil/core';

@Component({
    tag: 'jp-footer',
    styleUrl: 'jp-footer.css'
})

export class Footer {
    render() {
        return(
            <footer class="Footer">
                <jp-nav-secondary></jp-nav-secondary>
            </footer>
        )
    }
}
