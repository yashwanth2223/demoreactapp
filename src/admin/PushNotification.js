import React, { useState } from 'react';
import './css/PushNotification.css';

export default function PushNotification() {
  const [notificationText, setNotificationText] = useState('');

  const handleInputChange = (event) => {
    setNotificationText(event.target.value);
  };

  const handleSubmitNotification = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Simulate sending notification (replace with actual logic)
    console.log('Sending notification:', notificationText);

    // Clear the notification text after sending
    setNotificationText('');
  };

  return (
    <div className="push-notification">
      <h2> Push Notification</h2>
      <form onSubmit={handleSubmitNotification}>
        <textarea
          value={notificationText}
          onChange={handleInputChange}
          placeholder="Enter notification text..."
          required
        />
        <button type="submit">Send Notification</button>
      </form>
    </div>
  );
}
