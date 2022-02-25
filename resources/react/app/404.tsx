import React, { useEffect, useState } from 'react';

export default () => {
  const easeOutQuad = (t: number) => t * (2 - t);

  const frameDuration = 1000 / 60;

  const CountUpAnimation = ({ children, duration = 2000 }) => {
    const countTo = parseInt(children, 10);

    const [count, setCount] = useState(0);

    useEffect(() => {
      let frame = 0;

      const totalFrames = Math.round(duration / frameDuration);

      const counter = setInterval(() => {
        frame += 1;

        const progress = easeOutQuad(frame / totalFrames);

        setCount(countTo * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }, []);
    return Math.floor(count);
    // return <Fragment>{Math.floor(count)}</Fragment>;
    // Possible better way to return the value, but couldn't figure it out.
    // Might be worth looking at in the future.s
  };

  return (
    <div className="not-found-container">
      <div className="row">
        <div className="xs-12 md-6 mx-auto">
          <div id="countUp">
            <div className="number">
              <CountUpAnimation>404</CountUpAnimation>
            </div>
            <div className="text">Page not found</div>
            <div className="text">This may not mean anything.</div>
            <div className="text">I&apos;m probably working on something that has blown up.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
