# `react-use-localstorage`

React hook to store a state in `localStorage`. If the state is changed and then
the page is reloaded, the state should remain the same.

There are two functions in this package, `useLocalStorage` and
`useLocalStorageSynced`. If two instances of the app are open and one updates
the state, then using `useLocalStorageSynced` will update immediately, whereas
`useLocalStorage` will not until reload and could possibly overwrite the value.

## Notes on Usage

The `useLocalStorage` hook should only be used in components that will have 0-1
instances, e.g. `App`, or where a prop can be supplied for the `key` string.

The `useLocalStorageSynced` hook *can* have multiple components, but they will
all update with same value, so it might make more sense to abstract it into a
prop.

## Example Usage

```js
const [recovery, setRecovery] = useLocalStorage([], 'recovery');
// Even if the page is reloaded, it will still contain the recovered data
```

```js
const [recovery, setRecovery] = useLocalStorageSynced([], 'recovery');
// If another tab updates the state it will update in the original tab as well
```

```jsx
function DropDown({lsKey, /*...*/}) {
    const [option, setOption] = useLocalStorage(0, lsKey);
    
    // ...
}
// This component can be safely used multiple times assuming lsKey is changed`
```
