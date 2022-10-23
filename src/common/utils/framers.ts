const hoverUp = {
	translateY: -10,
	transition: {
		type: 'tween',
		duration: .5,
		ease: [.4,0,.2,1]
	}
}

const	listEaseIn = {
	hidden: {
		opacity: 0,
	},
	visible: (index: number) => ({
		x: [70, 0],
		opacity: 1,
		transition: {
			type: "spring",
			duration: .35,
			delay: index / 20
		}
	})
}

export default {
	hoverUp,
	listEaseIn
};
