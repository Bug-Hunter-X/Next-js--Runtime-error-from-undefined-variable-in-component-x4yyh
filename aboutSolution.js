```javascript
//pages/aboutSolution.js
function AboutSolution() {
  const name = 'John Doe'; // Define the variable
  
  // or
  const name = null; //handle undefined value
  return (
    <div>
      <h1>About Page</h1>
      <p>My name is {name || 'Guest'}</p> 
    </div>
  );
}

export default AboutSolution;
```