<script lang="typescript">
	import { Oval } from './defaults'
	export let visible: boolean = Oval.visible
	export let height: number = Oval.height
	export let width: number = Oval.width
	export let color: string = Oval.color
	export let secondaryColor: string = color
	export let strokeWidth: number = Oval.strokeWidth
	let secondaryStrokeWidth = strokeWidth
	const RADIUS = 20
	const getPath = (radius: number): string => {
		return ['M' + radius + ' 0c0-9.94-8.06', radius, radius, radius].join('-')
	}
	const getViewBoxSize = (strokeWidth: number, secondaryStrokeWidth: number, radius: number): string => {
		const maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth)
		const startingPoint = -radius - maxStrokeWidth / 2 + 1
		const endpoint = radius * 2 + maxStrokeWidth
		return [startingPoint, startingPoint, endpoint, endpoint].join(' ')
	}
</script>

<div>
	{#if visible}
		<svg
			{height}
			{width}
			stroke={color}
			viewBox={getViewBoxSize(Number(strokeWidth), Number(secondaryStrokeWidth), RADIUS)}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill="none" fill-rule="evenodd">
				<g transform="translate(1 1)" stroke-width={Number(secondaryStrokeWidth)}>
					<circle
						stroke-opacity=".5"
						cx="0"
						cy="0"
						r={RADIUS}
						stroke={secondaryColor}
						stroke-width={strokeWidth}
					/>
					<path d={getPath(RADIUS)}>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 0 0"
							to="360 0 0"
							dur="1s"
							repeatCount="indefinite"
						/>
					</path>
				</g>
			</g>
		</svg>
	{/if}
</div>
