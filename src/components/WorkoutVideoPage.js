import React, { useState, useEffect, useRef } from "react";
import "../style/WorkoutVideoPage.css";

const originalWorkouts = [
  {
    title: "Cardio Blast",
    videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI?enablejsapi=1&autoplay=1",
    exercises: [
      { name: "High Knees", duration: 10 },
      { name: "Burpees", duration: 10 },
    ],
  },
  {
    title: "Core Killer",
    videoUrl: "https://www.youtube.com/embed/1919eTCoESo?enablejsapi=1&autoplay=1",
    exercises: [
      { name: "Plank", duration: 10 },
      { name: "Bicycle Crunches", duration: 10 },
    ],
  },
  {
    title: "Leg Day",
    videoUrl: "https://www.youtube.com/embed/XaJzVzQXq4Q?enablejsapi=1&autoplay=1",
    exercises: [
      { name: "Squats", duration: 10 },
      { name: "Lunges", duration: 10 },
    ],
  },
];

// Insert break after each exercise except the last
const addBreaksToExercises = (exercises) => {
  const updated = [];
  exercises.forEach((exercise, index) => {
    updated.push(exercise);
    if (index < exercises.length - 1) {
      updated.push({ name: "Break", duration: 10, isBreak: true });
    }
  });
  return updated;
};

const WorkoutVideoPage = () => {
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    addBreaksToExercises(originalWorkouts[0].exercises)[0].duration
  );
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef(null);

  const currentWorkout = originalWorkouts[workoutIndex];
  const exercises = addBreaksToExercises(currentWorkout.exercises);
  const currentExercise = exercises[exerciseIndex];

  // YouTube API: Start timer when video starts
  useEffect(() => {
    const checkVideo = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const player = new window.YT.Player(iframe, {
        events: {
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.PLAYING) {
              setIsRunning(true);
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      tag.onload = () => {
        window.onYouTubeIframeAPIReady = checkVideo;
      };
    } else {
      checkVideo();
    }
  }, [workoutIndex]);

  // Timer countdown logic
  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 1) return prev - 1;
          else {
            clearInterval(timer);
            setTimeout(() => {
              handleNextStep();
            }, 500);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, exerciseIndex, workoutIndex]);

  const handleNextStep = () => {
    if (exerciseIndex < exercises.length - 1) {
      const next = exerciseIndex + 1;
      setExerciseIndex(next);
      setTimeLeft(exercises[next].duration);
    } else if (workoutIndex < originalWorkouts.length - 1) {
      const nextWorkout = workoutIndex + 1;
      setWorkoutIndex(nextWorkout);
      setExerciseIndex(0);
      setTimeLeft(addBreaksToExercises(originalWorkouts[nextWorkout].exercises)[0].duration);
    } else {
      alert("🏁 You’ve completed all workouts!");
      setIsRunning(false);
    }
  };

  const handlePrevWorkout = () => {
    if (workoutIndex > 0) {
      const prev = workoutIndex - 1;
      setWorkoutIndex(prev);
      setExerciseIndex(0);
      setTimeLeft(addBreaksToExercises(originalWorkouts[prev].exercises)[0].duration);
      setIsRunning(false);
    }
  };

  const handleNextWorkout = () => {
    if (workoutIndex < originalWorkouts.length - 1) {
      const next = workoutIndex + 1;
      setWorkoutIndex(next);
      setExerciseIndex(0);
      setTimeLeft(addBreaksToExercises(originalWorkouts[next].exercises)[0].duration);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setExerciseIndex(0);
    setTimeLeft(exercises[0].duration);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="workout-page">
      <h1 className="title">🔥 Guided Workout Series</h1>

      <div className="workout-controls">
        <button onClick={handlePrevWorkout} disabled={workoutIndex === 0}>
          ⬅ Prev Workout
        </button>
        <span className="workout-title">{currentWorkout.title}</span>
        <button
          onClick={handleNextWorkout}
          disabled={workoutIndex === originalWorkouts.length - 1}
        >
          Next Workout ➡
        </button>
      </div>

      {/* Only show video if not in break */}
      {!currentExercise.isBreak && (
        <div className="video-container">
          <iframe
            ref={iframeRef}
            src={currentWorkout.videoUrl}
            title={currentWorkout.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Show break message */}
      {currentExercise.isBreak && (
        <p className="break-msg">🧘 Take a 10 second break!</p>
      )}

      <p className="description">
        Step {exerciseIndex + 1} of {exercises.length}
      </p>

      <h2 className={`exercise-name ${currentExercise.isBreak ? "break" : ""}`}>
        {currentExercise.name}
      </h2>
      <div className="timer">{formatTime(timeLeft)}</div>

      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default WorkoutVideoPage;
