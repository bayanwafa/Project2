import React, { useState } from 'react';

// ActivityForm component receives a prop addActivity, a function to add a new activity
function ActivityForm({ addActivity }) {
  // State to manage form inputs
  const [activity, setActivity] = useState({
    date: '',
    duration: '',
    intensity: '',
    calories: '',
  });

  // Handle input changes and update the corresponding state
  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addActivity function passed as a prop to add the new activity
    addActivity(activity);
    // Reset the form inputs after submission
    setActivity({
      date: '',
      duration: '',
      intensity: '',
      calories: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs with corresponding labels */}
      <label>Date:</label>
      <input type="date" name="date" value={activity.date} onChange={handleChange} required />

      <label>Duration (mins):</label>
      <input type="number" name="duration" value={activity.duration} onChange={handleChange} required />

      <label>Intensity:</label>
      <input type="text" name="intensity" value={activity.intensity} onChange={handleChange} required />

      <label>Calories:</label>
      <input type="number" name="calories" value={activity.calories} onChange={handleChange} required />

      {/* Submit button */}
      <button type="submit">Log Activity</button>
    </form>
  );
}

export default ActivityForm;
