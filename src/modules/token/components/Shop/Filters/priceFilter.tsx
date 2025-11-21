
import Slider from '@mui/material/Slider'
import StoreData from '../../products/data'
import React, {
	useEffect, useState,
} from 'react'
const minDistance = 500
function valuetext(value: number | undefined,): string {
	return `${value}°C`
}
const PriceFilter:React.FC = () => {
	const [, setError,] = useState(false,)
	const prices = StoreData.map((p,) => {
		return p.productPrice
	},)
	const min = Math.min(...prices,)
	const max = Math.max(...prices,)

	useEffect(() => {
		setValue1([min, max,],)
	}, [StoreData,],)
	const [value1, setValue1,] = React.useState<Array<number>>([min, max,],)
	const handleChange1 = (
		event: Event,
		newValue: Array<number>,
		activeThumb: number,
	): void => {
		if (newValue[0] === undefined || newValue[1] === undefined) {
			setError(true,)
			return
		}

		if (value1[0] === undefined || value1[1] === undefined) {
			setError(true,)
			return
		}

		if (activeThumb === 0) {
			setValue1([Math.min(newValue[0], value1[1] - minDistance,), value1[1],],)
		} else {
			setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance,),],)
		}
	}

	return (
		<div>
			<Slider
				min={min}
				max={max}
				value={value1}
				onChange={handleChange1}
				valueLabelDisplay='auto'
				getAriaLabel={(): string => {
					return 'Minimum distance'
				}}
				getAriaValueText={valuetext}
				disableSwap
			/>
		</div>
	)
}

export default PriceFilter