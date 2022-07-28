<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { RotatingSquare } from './defaults'
	export let visible: boolean = RotatingSquare.visible
	export let height: number = RotatingSquare.height
	export let width: number = RotatingSquare.width
	export let strokeWidth: number = RotatingSquare.strokeWidth
	export let color: string = RotatingSquare.color
</script>

<div>
	{#if visible}
		<svg {height} {width} stroke={color} viewBox={viewBox.RotatingSquare} xmlns="http://www.w3.org/2000/svg">
			<rect fill="none" stroke={color} stroke-width={strokeWidth} x="25" y="25" width="50" height="50">
				<animateTransform
					attributeName="transform"
					dur="0.5s"
					from="0 50 50"
					to="180 50 50"
					type="rotate"
					id="strokeBox"
					attributeType="XML"
					begin="rectBox.end"
				/>
			</rect>
			<rect x="27" y="27" fill={color} width="46" height="50">
				<animate
					attributeName="height"
					dur="1.3s"
					attributeType="XML"
					from="50"
					to="0"
					id="rectBox"
					fill="freeze"
					begin="0s;strokeBox.end"
				/>
			</rect>
		</svg>
	{/if}
</div>
