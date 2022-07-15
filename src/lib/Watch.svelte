<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { Watch } from './defaults'
	export let visible: boolean = Watch.visible
	export let height: number = Watch.height
	export let width: number = Watch.width
	export let color: string = Watch.color
	export let radius = 48
</script>

<div>
	{#if visible}
		<svg {height} {width} stroke={color} viewBox={viewBox.Watch} xmlns="http://www.w3.org/2000/svg">
			<circle fill="none" stroke={color} stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r={radius} />
			<line
				fill="none"
				stroke-linecap="round"
				stroke={color}
				stroke-width="4"
				stroke-miterlimit="10"
				x1="50"
				y1="50"
				x2="85"
				y2="50.5"
			>
				<animateTransform
					attributeName="transform"
					dur="2s"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					repeatCount="indefinite"
				/>
			</line>
			<line
				fill="none"
				stroke-linecap="round"
				stroke={color}
				stroke-width="4"
				stroke-miterlimit="10"
				x1="50"
				y1="50"
				x2="49.5"
				y2="74"
			>
				<animateTransform
					attributeName="transform"
					dur="15s"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					repeatCount="indefinite"
				/>
			</line>
		</svg>
	{/if}
</div>
