import React, { useState, useEffect } from 'react';

export default function Timer({ isPlaying, resetTrigger }) {
  const [seconds, setSeconds] = useState(0);

  // 当外部传来 resetTrigger 变化时，重置时间
  useEffect(() => {
    setSeconds(0);
  }, [resetTrigger]);

  // 当处于正在玩的状态时，每秒加 1
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');

  return (
    <div className="timer">
      Time: {mins}:{secs}
    </div>
  );
}
