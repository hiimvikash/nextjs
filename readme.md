# Next JS - To The Point

# Routing

![image](https://github.com/user-attachments/assets/0dc796db-3f6f-4ef5-8d43-758ae9f1bae4)

# Layout

![image](https://github.com/user-attachments/assets/b9548757-9b1b-4e35-b77d-3254e2f3f2c0)

# Metadata Configuration

![image](https://github.com/user-attachments/assets/ff92bcf9-f01f-4045-80fb-b66e7c9b063b)

# Navigation

## via UI

```js
import Link from "next/link";
<Link href={"/products/1"}>Product 1</Link>;
```

## Programitically

```js
import { useRouter } from "next/router";
const router = useRouter();

{
  router.push("/");
}
```

# template.tsx

- Templates are similar to layouts in that they wrap each child layout or page
- But, with templates, when a user navigates between routes that share a template,
- a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized
- A template can be defined by exporting a default React component from a template.js or template.tsx file
- Similar to layouts, templates also should accept a children prop which will render the nested segments in the route.

# loading.tsx

exports a default function returning skeleton or spinner for particular route, this comes into action when that particular route is in loading state.

# error.tsx

This file will handle error for all it's child segment but to handle the error of `layout.tsx`, it needs to be in parent folder.

```js
"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
}
```

<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>

# Rendering in Next.js

## Rendering in React.js