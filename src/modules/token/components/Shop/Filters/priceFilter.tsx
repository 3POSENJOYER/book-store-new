import Slider from "@mui/material/Slider";
import React, { useState } from "react";

const minDistance = 5;

function valuetext(value: number | undefined): string {
  return `${value}°C`;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface FilterProps {
  setValue1: React.Dispatch<React.SetStateAction<Array<number>>>;
  min: number;
  max: number;
  value1: Array<number>;
}

const PriceFilter: React.FC<FilterProps> = ({
  setValue1,
  value1,
  min,
  max,
}) => {
  const [, setError] = useState(false);

  const handleChange1 = (
    event: Event,
    newValue: Array<number>,
    activeThumb: number,
  ): void => {
    if (newValue[0] === undefined || newValue[1] === undefined) {
      setError(true);
      return;
    }

    if (value1[0] === undefined || value1[1] === undefined) {
      setError(true);
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Slider
      min={min}
      max={max}
      value={value1}
      onChange={handleChange1}
      valueLabelDisplay="auto"
      getAriaLabel={(): string => {
        return "Minimum distance";
      }}
      getAriaValueText={valuetext}
      disableSwap
    />
  );
};

export default PriceFilter;
