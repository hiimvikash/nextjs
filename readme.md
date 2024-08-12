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
import Link from "next/link"
<Link href={"/products/1"}>Product 1</Link>
```
## Programitically
```js
import { useRouter } from "next/router"
const router = useRouter();

{
    router.push("/");
}
```



