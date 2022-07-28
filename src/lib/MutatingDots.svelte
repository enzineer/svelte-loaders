<script lang="typescript">
	import { viewBox } from './ViewBox'
	import { MutatingDots } from './defaults'
	export let visible: boolean = MutatingDots.visible
	export let height: number = MutatingDots.height
	export let width: number = MutatingDots.width
	export let color: string = MutatingDots.color
	export let secondaryColor: string = color
	export let radius: number = MutatingDots.dotRadius
</script>

<div>
	{#if visible}
		<svg id="goo-loader" {width} {height} viewBox={viewBox.MutatingDots}>
			<filter id="fancy-goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
					result="goo"
				/>
				<feComposite in="SourceGraphic" in2="goo" operator="atop" />
			</filter>
			<g filter="url(#fancy-goo)">
				<animateTransform
					id="mainAnim"
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					from="0 50 50"
					to="359 50 50"
					dur="1.2s"
					repeatCount="indefinite"
				/>
				<circle cx="50%" cy="40" r={radius} fill={color}>
					<animate
						id="cAnim1"
						attributeType="XML"
						attributeName="cy"
						dur="0.6s"
						begin="0;cAnim1.end+0.2s"
						calcMode="spline"
						values="40;20;40"
						keyTimes="0;0.3;1"
						keySplines="0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
					/>
				</circle>
				<circle cx="50%" cy="60" r={radius} fill={secondaryColor}>
					<animate
						id="cAnim2"
						attributeType="XML"
						attributeName="cy"
						dur="0.6s"
						begin="0.4s;cAnim2.end+0.2s"
						calcMode="spline"
						values="60;80;60"
						keyTimes="0;0.3;1"
						keySplines="0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
					/>
				</circle>
			</g>
		</svg>
	{/if}
</div>
