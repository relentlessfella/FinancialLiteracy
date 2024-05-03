import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import './styles.css';

const ProgressBar = ({ value, width }) => {
  return (
    <Progress.Root className="ProgressRoot" value={value} style={{ width: width }}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Progress.Root>
  );
};
export default ProgressBar;
