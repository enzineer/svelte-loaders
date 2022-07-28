<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { TailSpin } from './defaults'
	export let visible: boolean = TailSpin.visible
	export let height: number = TailSpin.height
	export let width: number = TailSpin.width
	export let radius: number = 1.2
	export let color: string = TailSpin.color
</script>

<div>
	{#if visible}
		<svg {height} {width} stroke={color} viewBox={viewBox.TailSpin} xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
					<stop stop-color={color} stop-opacity="0" offset="0%" />
					<stop stop-color={color} stop-opacity=".631" offset="63.146%" />
					<stop stop-color={color} offset="100%" />
				</linearGradient>
			</defs>
			<g fill="none" fill-rule="evenodd">
				<g transform="translate(1 1)">
					<path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke={color} stroke-width="2">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 18 18"
							to="360 18 18"
							dur="0.9s"
							repeatCount="indefinite"
						/>
					</path>
					<circle fill="#fff" cx="36" cy="18" r={radius}>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 18 18"
							to="360 18 18"
							dur="0.9s"
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			</g>
		</svg>
	{/if}
</div>
