/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IFbpNode,
} from '@scaljeri/fbp-shared';

export namespace Components {
  interface FbpConnection {}
  interface FbpDemo {}
  interface FbpMain {
    'nodes': IFbpNode[];
  }
  interface FbpNode {
    'activate': (state: boolean) => Promise<void>;
    'nodeId': string;
  }
}

declare global {


  interface HTMLFbpConnectionElement extends Components.FbpConnection, HTMLStencilElement {}
  var HTMLFbpConnectionElement: {
    prototype: HTMLFbpConnectionElement;
    new (): HTMLFbpConnectionElement;
  };

  interface HTMLFbpDemoElement extends Components.FbpDemo, HTMLStencilElement {}
  var HTMLFbpDemoElement: {
    prototype: HTMLFbpDemoElement;
    new (): HTMLFbpDemoElement;
  };

  interface HTMLFbpMainElement extends Components.FbpMain, HTMLStencilElement {}
  var HTMLFbpMainElement: {
    prototype: HTMLFbpMainElement;
    new (): HTMLFbpMainElement;
  };

  interface HTMLFbpNodeElement extends Components.FbpNode, HTMLStencilElement {}
  var HTMLFbpNodeElement: {
    prototype: HTMLFbpNodeElement;
    new (): HTMLFbpNodeElement;
  };
  interface HTMLElementTagNameMap {
    'fbp-connection': HTMLFbpConnectionElement;
    'fbp-demo': HTMLFbpDemoElement;
    'fbp-main': HTMLFbpMainElement;
    'fbp-node': HTMLFbpNodeElement;
  }
}

declare namespace LocalJSX {
  interface FbpConnection {}
  interface FbpDemo {}
  interface FbpMain {
    'nodes'?: IFbpNode[];
  }
  interface FbpNode {
    'nodeId'?: string;
  }

  interface IntrinsicElements {
    'fbp-connection': FbpConnection;
    'fbp-demo': FbpDemo;
    'fbp-main': FbpMain;
    'fbp-node': FbpNode;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'fbp-connection': LocalJSX.FbpConnection & JSXBase.HTMLAttributes<HTMLFbpConnectionElement>;
      'fbp-demo': LocalJSX.FbpDemo & JSXBase.HTMLAttributes<HTMLFbpDemoElement>;
      'fbp-main': LocalJSX.FbpMain & JSXBase.HTMLAttributes<HTMLFbpMainElement>;
      'fbp-node': LocalJSX.FbpNode & JSXBase.HTMLAttributes<HTMLFbpNodeElement>;
    }
  }
}


