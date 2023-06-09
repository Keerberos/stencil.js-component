/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EpisodeButton {
    }
    interface NavButton {
    }
}
declare global {
    interface HTMLEpisodeButtonElement extends Components.EpisodeButton, HTMLStencilElement {
    }
    var HTMLEpisodeButtonElement: {
        prototype: HTMLEpisodeButtonElement;
        new (): HTMLEpisodeButtonElement;
    };
    interface HTMLNavButtonElement extends Components.NavButton, HTMLStencilElement {
    }
    var HTMLNavButtonElement: {
        prototype: HTMLNavButtonElement;
        new (): HTMLNavButtonElement;
    };
    interface HTMLElementTagNameMap {
        "episode-button": HTMLEpisodeButtonElement;
        "nav-button": HTMLNavButtonElement;
    }
}
declare namespace LocalJSX {
    interface EpisodeButton {
    }
    interface NavButton {
    }
    interface IntrinsicElements {
        "episode-button": EpisodeButton;
        "nav-button": NavButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "episode-button": LocalJSX.EpisodeButton & JSXBase.HTMLAttributes<HTMLEpisodeButtonElement>;
            "nav-button": LocalJSX.NavButton & JSXBase.HTMLAttributes<HTMLNavButtonElement>;
        }
    }
}
