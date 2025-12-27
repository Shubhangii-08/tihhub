declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        ar?: boolean | string;
        'camera-controls'?: boolean | string;
        'auto-rotate'?: boolean | string;
        style?: React.CSSProperties;
        [key: string]: unknown;
      };
    }
  }
   