<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { Triangle } from './defaults'
	export let visible: boolean = Triangle.visible
	export let height: number = Triangle.height
	export let width: number = Triangle.width
	export let color: string = Triangle.color
</script>

<div>
	{#if visible}
		<svg
			id="triangle"
			{height}
			{width}
			stroke={color}
			viewBox={viewBox.Triangle}
			xmlns="http://www.w3.org/2000/svg"
		>
			<polygon fill="transparent" stroke={color} stroke-width="1" points="16,0 32,32 0,32" />
		</svg>
	{/if}
</div>

<style>
	svg {
		transform-origin: 50% 65%;
	}

	polygon {
		stroke-dasharray: 17;
		animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 136;
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
