<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { RotatingDots } from './defaults'
	export let visible: boolean = RotatingDots.visible
	export let height: number = RotatingDots.height
	export let width: number = RotatingDots.width
	export let color: string = RotatingDots.color
	export let dotRadius: number = RotatingDots.dotRadius
	export let clockWise: boolean = RotatingDots.clockWise
	const factor = clockWise ? 1 : -1
	const dots = [
		{ x: 80, y: 50 },
		{ x: 71.2, y: 71.2 },
		{ x: 50, y: 80 },
		{ x: 28.8, y: 71.2 },
		{ x: 20, y: 50 },
		{ x: 28.8, y: 28.8 },
		{ x: 50, y: 20 },
		{ x: 71.2, y: 28.8 },
	]
</script>

<div>
	{#if visible}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{width}
			{height}
			viewBox={viewBox.RotatingDots}
			preserveAspectRatio="xMidYMid"
		>
			{#each Array(8) as _, i}
				<g transform={`translate(${dots[i].x} ${dots[i].y})`}>
					<g transform={`rotate(${i * 45})`}>
						<circle cx="0" cy="0" r={dotRadius} fill={color} fill-opacity={(i + 1) * 0.125}>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin={factor * 0.125 * i + 's'}
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="1s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1s"
								repeatCount="indefinite"
								values="1;0"
								begin={factor * 0.125 * i + 's'}
							/>
						</circle>
					</g>
				</g>
			{/each}
		</svg>
	{/if}
</div>
