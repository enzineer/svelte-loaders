<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { Ball } from './defaults'
	export let visible: boolean = Ball.visible
	export let height: number = Ball.height
	export let width: number = Ball.width
	export let color: string = Ball.color
	export let circleRadius: number = Ball.circleRadius
</script>

<div>
	{#if visible}
		<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox={viewBox.Ball} preserveAspectRatio="xMidYMid">
			<circle cx="50" cy="23" r={circleRadius} fill={color}>
				<animate
					attributeName="cy"
					dur="1s"
					repeatCount="indefinite"
					calcMode="spline"
					keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
					keyTimes="0;0.5;1"
					values="23;77;23"
				/>
			</circle>
		</svg>
	{/if}
</div>
