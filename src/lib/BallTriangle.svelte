<!-- @ts no-check -->
<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { BallTriangle } from './defaults'
	export let visible: boolean = BallTriangle.visible
	export let height: number = BallTriangle.height
	export let width: number = BallTriangle.width
	export let circleRadius: number = BallTriangle.circleRadius
	export let color: string = BallTriangle.color
	export let animationSpeed = 2
	const circles = [
		{
			cx: 5,
			cy: 50,
			values1: '50;5;50;50',
			values2: '5;27;49;5',
			from1: '',
			from2: '',
			to1: '',
			to2: '',
		},
		{
			cx: 27,
			cy: 5,
			values1: '5;50;50;5',
			values2: '27;49;5;27',
			from1: 5,
			from2: 27,
			to1: 5,
			to2: 27,
		},
		{
			cx: 49,
			cy: 50,
			values1: '50;50;5;50',
			values2: '49;5;27;49',
			from1: '',
			from2: 49,
			to1: '',
			to2: 49,
		},
	]
</script>

<div>
	{#if visible}
		<svg {height} {width} stroke={color} viewBox={viewBox.BallTriangle} xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fill-rule="evenodd">
				<g transform="translate(1 1)" stroke-width="2">
					{#each circles as circle}
						<circle cx={circle.cx} cy={circle.cy} r={circleRadius}>
							<animate
								attributeName="cy"
								begin="0s"
								dur={1 * animationSpeed + 's'}
								from={circle.from1}
								to={circle.to1}
								values={circle.values1}
								calcMode="linear"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="cx"
								begin="0s"
								dur={1 * animationSpeed + 's'}
								from={circle.from2}
								to={circle.to2}
								values={circle.values2}
								calcMode="linear"
								repeatCount="indefinite"
							/>
						</circle>
					{/each}
				</g>
			</g>
		</svg>
	{/if}
</div>
