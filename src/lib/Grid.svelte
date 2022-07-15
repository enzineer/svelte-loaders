<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { Grid } from './defaults'
	export let visible: boolean = Grid.visible
	export let height: number = Grid.height
	export let width: number = Grid.width
	export let color: string = Grid.color
	export let radius: number = Grid.circleRadius
	export let animationSpeed = 1

	const circles = [
		{ cx: '12.5', cy: '12.5', begin: 0 },
		{ cx: '12.5', cy: '52.5', begin: 100 },
		{ cx: '52.5', cy: '12.5', begin: 300 },
		{ cx: '52.5', cy: '52.5', begin: 600 },
		{ cx: '92.5', cy: '12.5', begin: 800 },
		{ cx: '92.5', cy: '52.5', begin: 400 },
		{ cx: '12.5', cy: '92.5', begin: 700 },
		{ cx: '52.5', cy: '92.5', begin: 500 },
		{ cx: '92.5', cy: '92.5', begin: 200 },
	]
</script>

<div>
	{#if visible}
		<svg {height} {width} fill={color} viewBox={viewBox.Grid} xmlns="http://www.w3.org/2000/svg">
			{#each circles as circle}
				<circle cx={circle.cx} cy={circle.cy} r={radius}>
					<animate
						attributeName="fill-opacity"
						begin={circle.begin + 'ms'}
						dur={animationSpeed + 's'}
						values="1;.2;1"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
			{/each}
		</svg>
	{/if}
</div>
