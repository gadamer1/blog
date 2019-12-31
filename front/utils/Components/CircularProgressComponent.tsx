import React, { useState, FunctionComponent, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

const CircularProgressComponent: FunctionComponent = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function tick() {
      setProgress((oldProgress: number) =>
        oldProgress >= 100 ? 0 : oldProgress + 1
      );
    }
    const timer = setInterval(tick, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress variant="determinate" value={progress} />;
};

export default CircularProgressComponent;
