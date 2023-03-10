Why not? What are you doing now?

## Equivalent Class Example

If you used classes in React before, this code should look familiar &mdash;:

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

### Math
The state starts as `{ count: 0 }`, and we increment state.count when the user clicks a button by calling `this.setState()`. We’ll use snippets from this class throughout the page. $f_x=1$
$$
\begin{align}
 y &= mx + b \\
   &= ab + c
\end{align}
$$

```javascript
console.log("Hello world");
```

> **_Note_**
>
> You might be wondering why we’re using a counter here instead of a more realistic example. This is to help us focus on the API while we’re still making our first steps with Hooks.
