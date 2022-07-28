<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { DualRing } from './defaults'
	export let visible: boolean = DualRing.visible
	export let height: number = DualRing.height
	export let width: number = DualRing.width
	export let color: string = DualRing.color
</script>

<div>
	{#if visible}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{width}
			{height}
			viewBox={viewBox.DualRing}
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				r="32"
				stroke-width="8"
				stroke={color}
				stroke-dasharray="50.26548245743669 50.26548245743669"
				fill="none"
				stroke-linecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;1"
					values="0 50 50;360 50 50"
				/>
			</circle>
		</svg>
	{/if}
</div>
