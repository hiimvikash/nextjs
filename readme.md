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

<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>

# Rendering

## Rendering in React.js - Client-side Rendering
![image](https://github.com/user-attachments/assets/1389bcc9-6712-425e-ad28-ed583c1d47a1)
- This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering (CSR)
- CSR quickly became the standard for SPAs, with widespread adoption
- It wasn't long before developers began noticing some inherent drawbacks to this approach.
- **Inconvinience in React.js**
    - Seperate backend.
    - No inbuilt routing.
    - `Not SEO optimized.` Reliance on JavaScript for rendering content on the client side can significantly hurt SEO, as search engines might struggle to index the content properly.
    - `Waterfall model.` The user experience can suffer from slow load times, as the browser has to download, parse, and execute JavaScript before the user sees any meaningful content on the page
## Rendering in Next.js - Solution to CSR.
![image](https://github.com/user-attachments/assets/b843ca98-6f6b-43d6-bb0d-db87677cf71a)
### Hydration
- During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served
- It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements
- This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactive user experience

### Server Side Solutions

1. Static Site Generation (SSG)
    - SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts.
2. Server-Side Rendering (SSR)
    - SSR, on the other hand, renders pages on-demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user.

Server-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial page loads and better SEO.

### Drawbacks of SSR
1. **You have to fetch everything before you can show anything.**
    - Components cannot start rendering and then pause or "wait" while data is still being loaded.
    - If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page.
    - This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.
2. **You have to load everything before you can hydrate anything.**
    - For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree.
    - This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them.
3. **You have to hydrate everything before you can interact with anything.**
    - React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree,
    - As a consequence, all components must be hydrated before you can interact with any of them.

`summary :-`
1. Data fetching must be completed before the server can begin rendering HTML.
2. The JavaScript required for the components needs to be fully loaded on the client side before the hydration process can start.
3. All components have to be hydrated before they become interactive.
### Solution to above drawbacks of SSR.
[blog link](https://blog.saeloun.com/2022/01/20/new-suspense-ssr-architecture-in-react-18/) 
1. **You have to fetch everything before you can show anything.**
    - ![image](https://github.com/user-attachments/assets/3731dc4d-a682-4fad-89a1-b34f735ec4da)
    - If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later.
    - When the data for the MAIN CONTENT is ready on the server, React will send additional HTML into the same stream, along with the `<script>` tag to put that HTML in the ‘right place’.


2. **We know that all the JavaScript code needs to load before starting to hydrate. Again, our <MainContent> component has a lot of complex JavaScript logic involved, it would take some time to load. Even though the JS code for NavBar, SideBar, Header is loaded, hydration cannot start.**
    - Using `React.lazy` for code splitting enables you to separate the main section's code from the primary JavaScript bundle The JavaScript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client without having to wait for the main section's code.
    - By wrapping `<MainContent>` in `<Suspense>`, we not only tell React to unblock the rest of the page from streaming but also from hydrating! This is called ‘Selective Hydration’. Thanks to Selective Hydration, a heavy piece of JS doesn’t prevent the rest of the page from becoming interactive.
    - ![image](https://github.com/user-attachments/assets/ebf0f051-bea0-4e16-ad9e-7a396c278bec)

3. **Hydrate everything before interacting with anything**
    - Suppose, we have multiple components wrapped in `<Suspense>`.
    - React will attempt to hydrate both of them, starting with the Suspense boundary that it finds earlier in the tree ( SideBar in this case ).
    - Let’s say the user starts interacting with the `<MainContent>` section, for which the code is also loaded. In this case, React will prioritize hydrating the `<MainContent>` assuming it to be more urgent and makes the `<MainContent>` section interactive. After that, it will continue hydrating the Sidebar.








