// src/components/TaskTimer.js
import React, { useState, useEffect } from 'react';

const TaskTimer = () => {
  const [time, setTime] = useState(0); // Initial time state
  const [isRunning, setIsRunning] = useState(false); // Timer running status

  // useEffect for starting or stopping the timer
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1 every second
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval); // Clear timer when paused
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isRunning, time]);

  // Functions to start, pause, and reset the timer
  const handleStartPause = () => {
    setIsRunning(!isRunning); // Toggle the timer
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0); // Reset time to 0
  };

  // Helper function to format time as HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeInSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="task-timer">
      <h2>Task Timer</h2>
      <div className="timer-display">
        <h3>{formatTime(time)}</h3>
      </div>
      <div className="controls">
        <button onClick={handleStartPause} className="btn btn-primary">
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="btn btn-secondary">Reset</button>
      </div>
    </div>
  );
};

export default TaskTimer;
