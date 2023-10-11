declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React = require('react');

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare const __IS_DEV__: boolean;
