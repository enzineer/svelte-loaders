<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { Rings } from './defaults'
	export let visible: boolean = Rings.visible
	export let height: number = Rings.height
	export let width: number = Rings.width
	export let radius = 6
	export let color: string = Rings.color
	const circles = [
		{
			begin: 1.5,
			duration: 3,
			animate: [
				{ attr: 'r', values: '6;22' },
				{ attr: 'stroke-opacity', values: '1;0' },
				{ attr: 'stroke-width', values: '2;0' },
			],
		},
		{
			begin: 3,
			duration: 3,
			animate: [
				{ attr: 'r', values: '6;22' },
				{ attr: 'stroke-opacity', values: '1;0' },
				{ attr: 'stroke-width', values: '2;0' },
			],
		},
		{ begin: 0, duration: 1.5, animate: [{ attr: 'r', values: '6;1;2;3;4;5;6' }] },
	]
</script>

<div>
	{#if visible}
		<svg {height} {width} viewBox={viewBox.Rings} stroke={color} x="0px" y="0px" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
				{#each circles as circle}
					<circle cx="22" cy="22" r={radius} stroke-opacity="0">
						{#each circle.animate as animate}
							<animate
								attributeName={animate.attr}
								begin={circle.begin + 's'}
								dur={circle.duration + 's'}
								values={animate.values}
								calcMode="linear"
								repeatCount="indefinite"
							/>
						{/each}
					</circle>
				{/each}
			</g>
		</svg>
	{/if}
</div>
