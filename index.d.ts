declare module 'json-stringify-pretty-compact' {
  const stringify: (object: any, options?: {
      indent?: number | string,
      maxLength?: number,
      maxNesting?: number,
      margins?: boolean,
      arrayMargins?: boolean,
      objectMargins?: boolean
  }) => string;
  export = stringify;
}
