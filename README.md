`svelte-loaders` provides customizable svelte svg spinner/loader component which can be implemented for async await operation before data loads to the view.

### Installation

```bash
npm install svelte-loaders --save

# or
yarn add svelte-loaders
```

### Documentation:

1. [Docs](https://enzineer.github.io/svelte-loaders/)
2. [REPL](https://svelte.dev/repl/db80c4feb02f4812bac0bff259cad14e?version=3.49.0)

### Usage

```jsx
<script>
	import { Grid} from 'svelte-loaders';
</script>

<Grid visible={true} height={100} width={100} color="#ff3e00" circleRadius={12.5}/>
```

## License

MIT
