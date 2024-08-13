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
# Parallel Route
## Folder Structure :-
![image](https://github.com/user-attachments/assets/1e5bd0cc-17c5-4417-889a-3780eb439952)
## layout.tsx
- `{children}` here is `page.tsx`
![image](https://github.com/user-attachments/assets/f1e1161a-d7b7-4d43-b03c-17380e4e8b3d)
## @notification
![image](https://github.com/user-attachments/assets/b28fdcf3-41bd-4ca0-ba9e-df1590158f37)

### Benefits of parallel routes over traditional compononent method:- 
- **Independent Route Handling**
  - ![image](https://github.com/user-attachments/assets/714085f4-def9-4d79-a97f-7814124c3aae)
  - Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states
  - This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors
- **Sub-navigation in routes**
  - ![image](https://github.com/user-attachments/assets/e9cbdbc9-8be2-471c-a9a9-ba6c95aba6c7)
  - Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management
  - This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.





