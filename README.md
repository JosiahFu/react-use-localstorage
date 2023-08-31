# `react-use-localstorage`

React hook to store a state in `localStorage`. If the state is changed and then
the page is reloaded, the state should remain the same.

## Example Usage

```js
const [recovery, setRecovery] = useState([]);
// Even if the page is reloaded, it will still contain the recovered data.
```
