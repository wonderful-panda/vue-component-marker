# vue-component-marker

Do nothing actually.
Just tell "This is ComponentOptions" to TypeScript compiler.

## Motivation

When we write component options in `Vue.extend()`, type definition of vue
provides awesome type checking and completions of props, data, and methods.

```typescript
const MyComponent = vue.extend({
  props: {
    message: string
  },
  render(h): vnode {
    // `this.message` is treated as string
    return h("span", this.message);
  }
});
```

But sometimes we must write component options without `Vue.extend()`,
and we cannot get compiler support in such case.

```typescript
const MyComponent = {
  props: {
    message: string
  },
  render(h): vnode {
    // Compile error: Property 'message' does not exist on ...
    return h("span", this.message);
  }
};
```

By this helper, we can tell "this is ComponentOptions" to TypeScript,
and get compiler support again.

```typescript
import _c from "vue-component-marker";

const MyComponent = _c({
  props: {
    message: string
  },
  render(h): vnode {
    // `this.message` is treated as string
    return h("span", this.message);
  }
});
```

## License

MIT
