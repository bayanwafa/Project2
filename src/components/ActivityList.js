import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ActivityForm from './ActivityForm';
import './App.css';

const url = 'https://658f6eaa2871a9866e7a7460.mockapi.io/activity';

function ActivityList() {
  const [activities, setActivities] = useState([]);

  // Function to fetch all activities
  const getAll = () => {
    Axios.get(url)
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  };

  // Fetch all activities on component mount
  useEffect(() => {
    getAll();
  }, []);

  // Function to add a new activity
  const addActivity = (newActivity) => {
    Axios.post(url, newActivity)
      .then((response) => {
        // Instead of calling getAll, update the state directly
        setActivities([...activities, response.data]);
      })
      .catch((error) => {
        console.error('Error adding activity:', error);
      });
  };


  return (
    <div className="activity-list">
      <h2>Activity Log</h2>
      <div className="activity-form">
        <ActivityForm addActivity={addActivity} />
      </div>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            Date: {activity.date}, Duration: {activity.duration} mins, Intensity: {activity.intensity}, Calories: {activity.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;