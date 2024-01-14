import React, { useState } from 'react';

function ActivityForm({ addActivity }) {
  const [activity, setActivity] = useState({
    date: '',
    duration: '',
    intensity: '',
    calories: '',
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(activity);
    setActivity({
      date: '',
      duration: '',
      intensity: '',
      calories: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" name="date" value={activity.date} onChange={handleChange} required />

      <label>Duration (mins):</label>
      <input type="number" name="duration" value={activity.duration} onChange={handleChange} required />

      <label>Intensity:</label>
      <input type="text" name="intensity" value={activity.intensity} onChange={handleChange} required />

      <label>Calories:</label>
      <input type="number" name="calories" value={activity.calories} onChange={handleChange} required />

      <button type="submit">Log Activity</button>
    </form>
  );
}

export default ActivityForm;
