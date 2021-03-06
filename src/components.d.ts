/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRadical {}
  interface AppRadicalAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppWork {}
  interface AppWorkAttributes extends StencilHTMLAttributes {}

  interface AppWriting {}
  interface AppWritingAttributes extends StencilHTMLAttributes {}

  interface JpBlogPostHighlight {
    'postLink': string;
    'postTitle': string;
    'pubDate': string;
  }
  interface JpBlogPostHighlightAttributes extends StencilHTMLAttributes {
    'postLink'?: string;
    'postTitle'?: string;
    'pubDate'?: string;
  }

  interface JpBlogPostListItem {
    'postLink': string;
    'postTitle': string;
    'pubDate': string;
  }
  interface JpBlogPostListItemAttributes extends StencilHTMLAttributes {
    'postLink'?: string;
    'postTitle'?: string;
    'pubDate'?: string;
  }

  interface JpCard {
    'clientTitle': string;
    'imageAlignRight': boolean;
    'imageAltText': string;
    'imageSrc': string;
    'projectLink': string;
    'projectTitle': string;
  }
  interface JpCardAttributes extends StencilHTMLAttributes {
    'clientTitle'?: string;
    'imageAlignRight'?: boolean;
    'imageAltText'?: string;
    'imageSrc'?: string;
    'projectLink'?: string;
    'projectTitle'?: string;
  }

  interface JpContentH2 {
    'title': string;
  }
  interface JpContentH2Attributes extends StencilHTMLAttributes {
    'title'?: string;
  }

  interface JpContent {}
  interface JpContentAttributes extends StencilHTMLAttributes {}

  interface JpDivider {}
  interface JpDividerAttributes extends StencilHTMLAttributes {}

  interface JpFooter {}
  interface JpFooterAttributes extends StencilHTMLAttributes {}

  interface JpHeader {}
  interface JpHeaderAttributes extends StencilHTMLAttributes {}

  interface JpNavPrimary {}
  interface JpNavPrimaryAttributes extends StencilHTMLAttributes {}

  interface JpNavSecondary {}
  interface JpNavSecondaryAttributes extends StencilHTMLAttributes {}

  interface JpRacingStripe {}
  interface JpRacingStripeAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRadical': Components.AppRadical;
    'AppRoot': Components.AppRoot;
    'AppWork': Components.AppWork;
    'AppWriting': Components.AppWriting;
    'JpBlogPostHighlight': Components.JpBlogPostHighlight;
    'JpBlogPostListItem': Components.JpBlogPostListItem;
    'JpCard': Components.JpCard;
    'JpContentH2': Components.JpContentH2;
    'JpContent': Components.JpContent;
    'JpDivider': Components.JpDivider;
    'JpFooter': Components.JpFooter;
    'JpHeader': Components.JpHeader;
    'JpNavPrimary': Components.JpNavPrimary;
    'JpNavSecondary': Components.JpNavSecondary;
    'JpRacingStripe': Components.JpRacingStripe;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-radical': Components.AppRadicalAttributes;
    'app-root': Components.AppRootAttributes;
    'app-work': Components.AppWorkAttributes;
    'app-writing': Components.AppWritingAttributes;
    'jp-blog-post-highlight': Components.JpBlogPostHighlightAttributes;
    'jp-blog-post-list-item': Components.JpBlogPostListItemAttributes;
    'jp-card': Components.JpCardAttributes;
    'jp-content-h2': Components.JpContentH2Attributes;
    'jp-content': Components.JpContentAttributes;
    'jp-divider': Components.JpDividerAttributes;
    'jp-footer': Components.JpFooterAttributes;
    'jp-header': Components.JpHeaderAttributes;
    'jp-nav-primary': Components.JpNavPrimaryAttributes;
    'jp-nav-secondary': Components.JpNavSecondaryAttributes;
    'jp-racing-stripe': Components.JpRacingStripeAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRadicalElement extends Components.AppRadical, HTMLStencilElement {}
  var HTMLAppRadicalElement: {
    prototype: HTMLAppRadicalElement;
    new (): HTMLAppRadicalElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppWorkElement extends Components.AppWork, HTMLStencilElement {}
  var HTMLAppWorkElement: {
    prototype: HTMLAppWorkElement;
    new (): HTMLAppWorkElement;
  };

  interface HTMLAppWritingElement extends Components.AppWriting, HTMLStencilElement {}
  var HTMLAppWritingElement: {
    prototype: HTMLAppWritingElement;
    new (): HTMLAppWritingElement;
  };

  interface HTMLJpBlogPostHighlightElement extends Components.JpBlogPostHighlight, HTMLStencilElement {}
  var HTMLJpBlogPostHighlightElement: {
    prototype: HTMLJpBlogPostHighlightElement;
    new (): HTMLJpBlogPostHighlightElement;
  };

  interface HTMLJpBlogPostListItemElement extends Components.JpBlogPostListItem, HTMLStencilElement {}
  var HTMLJpBlogPostListItemElement: {
    prototype: HTMLJpBlogPostListItemElement;
    new (): HTMLJpBlogPostListItemElement;
  };

  interface HTMLJpCardElement extends Components.JpCard, HTMLStencilElement {}
  var HTMLJpCardElement: {
    prototype: HTMLJpCardElement;
    new (): HTMLJpCardElement;
  };

  interface HTMLJpContentH2Element extends Components.JpContentH2, HTMLStencilElement {}
  var HTMLJpContentH2Element: {
    prototype: HTMLJpContentH2Element;
    new (): HTMLJpContentH2Element;
  };

  interface HTMLJpContentElement extends Components.JpContent, HTMLStencilElement {}
  var HTMLJpContentElement: {
    prototype: HTMLJpContentElement;
    new (): HTMLJpContentElement;
  };

  interface HTMLJpDividerElement extends Components.JpDivider, HTMLStencilElement {}
  var HTMLJpDividerElement: {
    prototype: HTMLJpDividerElement;
    new (): HTMLJpDividerElement;
  };

  interface HTMLJpFooterElement extends Components.JpFooter, HTMLStencilElement {}
  var HTMLJpFooterElement: {
    prototype: HTMLJpFooterElement;
    new (): HTMLJpFooterElement;
  };

  interface HTMLJpHeaderElement extends Components.JpHeader, HTMLStencilElement {}
  var HTMLJpHeaderElement: {
    prototype: HTMLJpHeaderElement;
    new (): HTMLJpHeaderElement;
  };

  interface HTMLJpNavPrimaryElement extends Components.JpNavPrimary, HTMLStencilElement {}
  var HTMLJpNavPrimaryElement: {
    prototype: HTMLJpNavPrimaryElement;
    new (): HTMLJpNavPrimaryElement;
  };

  interface HTMLJpNavSecondaryElement extends Components.JpNavSecondary, HTMLStencilElement {}
  var HTMLJpNavSecondaryElement: {
    prototype: HTMLJpNavSecondaryElement;
    new (): HTMLJpNavSecondaryElement;
  };

  interface HTMLJpRacingStripeElement extends Components.JpRacingStripe, HTMLStencilElement {}
  var HTMLJpRacingStripeElement: {
    prototype: HTMLJpRacingStripeElement;
    new (): HTMLJpRacingStripeElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-radical': HTMLAppRadicalElement
    'app-root': HTMLAppRootElement
    'app-work': HTMLAppWorkElement
    'app-writing': HTMLAppWritingElement
    'jp-blog-post-highlight': HTMLJpBlogPostHighlightElement
    'jp-blog-post-list-item': HTMLJpBlogPostListItemElement
    'jp-card': HTMLJpCardElement
    'jp-content-h2': HTMLJpContentH2Element
    'jp-content': HTMLJpContentElement
    'jp-divider': HTMLJpDividerElement
    'jp-footer': HTMLJpFooterElement
    'jp-header': HTMLJpHeaderElement
    'jp-nav-primary': HTMLJpNavPrimaryElement
    'jp-nav-secondary': HTMLJpNavSecondaryElement
    'jp-racing-stripe': HTMLJpRacingStripeElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-radical': HTMLAppRadicalElement;
    'app-root': HTMLAppRootElement;
    'app-work': HTMLAppWorkElement;
    'app-writing': HTMLAppWritingElement;
    'jp-blog-post-highlight': HTMLJpBlogPostHighlightElement;
    'jp-blog-post-list-item': HTMLJpBlogPostListItemElement;
    'jp-card': HTMLJpCardElement;
    'jp-content-h2': HTMLJpContentH2Element;
    'jp-content': HTMLJpContentElement;
    'jp-divider': HTMLJpDividerElement;
    'jp-footer': HTMLJpFooterElement;
    'jp-header': HTMLJpHeaderElement;
    'jp-nav-primary': HTMLJpNavPrimaryElement;
    'jp-nav-secondary': HTMLJpNavSecondaryElement;
    'jp-racing-stripe': HTMLJpRacingStripeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
