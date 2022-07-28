export const defaults = {
	visible: true,
	height: 100,
	width: 100,
	color: '#333',
	radius: 12.5,
}
export const commonDefaults = { visible: true, height: 100, width: 100, color: '#ff3e00' }
export const BallTriangle = {
	...commonDefaults,
	circleRadius: 5,
}
export const Bars = { ...commonDefaults, barWidth: 15 }
export const BarsCircle = { ...commonDefaults, barWidth: 4, barHeight: 10, clockWise: true }
export const Ball = { ...commonDefaults, circleRadius: 12.5 }
export const DualRing = { ...commonDefaults }
export const Grid = { ...commonDefaults, circleRadius: 12.5 }
export const GearSet = { ...commonDefaults }
export const InfinitySpin = { ...commonDefaults }
export const MutatingDots = { ...commonDefaults, secondaryColor: 'color', dotRadius: 12.5 }
export const Oval = { ...commonDefaults, secondaryColor: 'color', strokeWidth: 2 }
export const RevolvingDot = { ...commonDefaults, dotRadius: 6, secondaryColor: 'color' }
export const Rings = { ...commonDefaults }
export const RotatingSquare = { ...commonDefaults, strokeWidth: 4 }
export const RotatingDots = { ...commonDefaults, dotRadius: 5, clockWise: true }
export const TailSpin = { ...commonDefaults }
export const ThreeDots = { ...commonDefaults, dotRadius: 10 }
export const Triangle = { ...commonDefaults }
export const Watch = { ...commonDefaults }
export const Whirl = { ...commonDefaults }
