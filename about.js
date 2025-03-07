```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
function About() {
  // This will cause an error because the variable is not defined
  return (
    <div>
      <h1>About Page</h1>
      <p>My name is {name}</p> 
    </div>
  );
}

export default About;
```