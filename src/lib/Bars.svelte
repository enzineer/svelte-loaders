<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { Bars } from './defaults'
	export let visible: boolean = Bars.visible
	export let height: number = Bars.height
	export let width: number = Bars.width
	export let color: string = Bars.color
	export let animationSpeed = 1
	export let barWidth: number = Bars.barWidth
	const rects = [
		{
			x: '',
			y: 10,
			begin: 0.5,
		},
		{
			x: 30,
			y: 10,
			begin: 0.25,
		},
		{
			x: 60,
			y: '',
			begin: 0,
		},
		{
			x: 90,
			y: 10,
			begin: 0.25,
		},
		{
			x: 120,
			y: 10,
			begin: 0.5,
		},
	]
</script>

<div>
	{#if visible}
		<svg {height} {width} fill={color} viewBox={viewBox.Bars} xmlns="http://www.w3.org/2000/svg">
			{#each rects as rect}
				<rect x={rect.x} y={rect.y} width={barWidth} height="120" rx="6">
					<animate
						attributeName="height"
						begin={rect.begin + 's'}
						dur={animationSpeed + 's'}
						values="120;110;100;90;80;70;60;50;40;140;120"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						begin={rect.begin + 's'}
						dur={animationSpeed + 's'}
						values="10;15;20;25;30;35;40;45;50;0;10"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</rect>
			{/each}
		</svg>
	{/if}
</div>
