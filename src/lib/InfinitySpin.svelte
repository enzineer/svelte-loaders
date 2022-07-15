<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { InfinitySpin } from './defaults'
	export let visible: boolean = InfinitySpin.visible
	export let height: number = InfinitySpin.height
	export let width: number = InfinitySpin.width
	export let color: string = InfinitySpin.color
</script>

<div>
	{#if visible}
		<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox={viewBox.InfinitySpin}
			><path
				class="infinity"
				stroke={color}
				fill="none"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
			/><path
				opacity="0.25"
				fill="none"
				stroke={color}
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
			/>
		</svg>
	{/if}
</div>

<style>
	.infinity {
		stroke-dasharray: 2.42777px, 242.777px;
		stroke-dashoffset: 0px;
		animation: 1.6s linear 0s infinite normal none running infiniteSign;
	}
	@keyframes infiniteSign {
		12.5% {
			stroke-dasharray: 33.9887px, 242.777px;
			stroke-dashoffset: -26.7054px;
		}
		43.75% {
			stroke-dasharray: 84.9718px, 242.777px;
			stroke-dashoffset: -84.9718px;
		}
		100% {
			stroke-dasharray: 2.42777px, 242.777px;
			stroke-dashoffset: -240.349px;
		}
	}
</style>
