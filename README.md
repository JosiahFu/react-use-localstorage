# `react-use-localstorage`

React hook to provide a state backed by `localStorage`. If the state is changed
and then the page is reloaded, the state should remain the same.

## Example Usage

```js
const [recovery, setRecovery] = useState([]);
// Even if the page is reloaded, it will still contain the recovered data.
```
