declare module '*.html' {
    const content: string;
    export default content;
  }
  declare module '*.json' {
    const content: Array<any>;
    export default content;
  }