import { Card, Paragraph } from 'theme-ui'

type calloutType = {
	type: string,
	children: React.ReactNode
}

export const Callout = ({ type = "warning", children }: calloutType) => {
	const cardStyle = {
		color: `callout.${type}.color`,
		borderColor: `callout.${type}.borderColor`,
		backgroundColor: `callout.${type}.backgroundColor`,
	};

	const contentStyle = {
		'& > strong': {
			color: `callout.${type}.strongColor`
		}
	}

	return (
		<Card variant="outlined" sx={ cardStyle }>
			<Paragraph sx={ contentStyle }><strong>Note：</strong>{ children }</Paragraph>
		</Card>
	)
}
