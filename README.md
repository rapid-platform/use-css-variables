# React Hook &mdash; `useCssVariables`

Maps an object of key value pairs onto a target HTML element ref as CSS Variables

This library has no dependencies.

```ts
function useCssVariables<S = Record<string, string | number | undefined>>(
  ref: React.MutableRefObject<any>,
  styles: S,
  deps?: React.DependencyList
): void;
```

## Examples

Object of variables to add

```ts
const divRef = useRef<React.HTMLDivElement>();

// Values in object can be dynamic JS variables
const fontColor = "#3b3b3b";

const vars = {
  height: "10px",
  width: "30rem",
  color: fontColor,
};

useCssVariables(divRef, vars, [vars]);

return <div ref={divRef}>Content</div>;
```
