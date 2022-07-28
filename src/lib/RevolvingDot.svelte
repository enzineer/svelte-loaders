<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { RevolvingDot } from './defaults'
	export let visible: boolean = RevolvingDot.visible
	export let height: number = RevolvingDot.height
	export let width: number = RevolvingDot.width
	export let radius: number = RevolvingDot.dotRadius
	export let color: string = RevolvingDot.color
	export let secondaryColor: string = color
</script>

<div>
	{#if visible}
		<svg
			{height}
			{width}
			viewBox={viewBox.RevolvingDot}
			stroke={color}
			x="0px"
			y="0px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				class="revolving-dot-circle-1"
				fill="none"
				stroke={color}
				stroke-width="4"
				cx="50"
				cy="50"
				r={Number(`${radius}`) + 38}
			/>
			<circle fill={secondaryColor} stroke={secondaryColor} stroke-width="3" cx="8" cy="54" r={radius}>
				<animateTransform
					attributeName="transform"
					dur="2s"
					type="rotate"
					from="0 50 48"
					to="360 50 52"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	{/if}
</div>

<style>
	.revolving-dot-circle-1 {
		opacity: 0.5;
	}
</style>
