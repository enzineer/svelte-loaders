<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { BarsCircle } from './defaults'
	export let visible: boolean = BarsCircle.visible
	export let height: number = BarsCircle.height
	export let width: number = BarsCircle.width
	export let barWidth: number = BarsCircle.barWidth
	export let barHeight: number = BarsCircle.barHeight
	export let color: string = BarsCircle.color
	export let clockWise: boolean = BarsCircle.clockWise
	const factor = clockWise ? 1 : -1
</script>

<div>
	{#if visible}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{width}
			{height}
			viewBox={viewBox.BarsCircle}
			preserveAspectRatio="xMidYMid"
			>{#each Array(12) as _, i}
				<g transform={`rotate(${i * 30} 50 50)`}>
					<rect x="48.5" y="25.5" rx="1.5" ry="2.7" width={barWidth} height={barHeight} fill={color}>
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1.0526315789473684s"
							begin={factor * i * 0.087719 + 's'}
							repeatCount="indefinite"
						/>
					</rect>
				</g>
			{/each}
		</svg>
	{/if}
</div>
