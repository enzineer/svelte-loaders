<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { ThreeDots } from './defaults'
	export let visible: boolean = ThreeDots.visible
	export let height: number = ThreeDots.height
	export let width: number = ThreeDots.width
	export let color: string = ThreeDots.color
	export let radius: number = ThreeDots.dotRadius
	const circles = [
		{
			cx: 15,
			cy: 15,
			r: Number(radius) + 6,
			animate: [
				{ attr: 'r', from: 15, to: 15, values: '15;9;15' },
				{ attr: 'fill-opacity', from: 1, to: 1, values: '1;.5;1' },
			],
		},
		{
			cx: 60,
			cy: 15,
			r: Number(radius),
			animate: [
				{ attr: 'r', from: 9, to: 9, values: '9;15;9' },
				{ attr: 'fill-opacity', from: 0.5, to: 0.5, values: '.5;1;.5' },
			],
		},
		{
			cx: 105,
			cy: 15,
			r: Number(radius) + 6,
			animate: [
				{ attr: 'r', from: 15, to: 15, values: '15;9;15' },
				{ attr: 'fill-opacity', from: 1, to: 1, values: '1;.5;1' },
			],
		},
	]
</script>

<div>
	{#if visible}
		<svg {height} {width} fill={color} viewBox={viewBox.ThreeDots} xmlns="http://www.w3.org/2000/svg">
			{#each circles as circle}
				<circle cx={circle.cx} cy={circle.cy} r={Number(radius) + 6}>
					{#each circle.animate as animate}
						<animate
							attributeName={animate.attr}
							from={animate.from}
							to={animate.to}
							begin="0s"
							dur="0.8s"
							values={animate.values}
							calcMode="linear"
							repeatCount="indefinite"
						/>
					{/each}
				</circle>
			{/each}
		</svg>
	{/if}
</div>
