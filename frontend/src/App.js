import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [address, setAddress] = useState('');
  const [addressDetails, setAddressDetails] = useState({});
  const [alertData, setAlertData] = useState({});

  const handleAddressSubmit = async () => {
    try {
      // Fetch address details from the backend
      const response = await axios.get(`/api/address/${address}`);
      setAddressDetails(response.data.addressDetails);
    } catch (error) {
      console.error('Error fetching address details', error);
    }
  };

  const handleAlertSetup = async () => {
    try {
      // Set up alerts using backend API
      await axios.post('/api/alerts', alertData);
    } catch (error) {
      console.error('Error setting up alerts', error);
    }
  };

  return (
    <div>
      <h1>Blockchain Explorer</h1>
      <input
        type="text"
        placeholder="Enter Ethereum address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleAddressSubmit}>Get Address Details</button>

      {/* Display address details */}
      {addressDetails && (
        <div>
          <h2>Address Details</h2>
          {/* Display address details here */}
        </div>
      )}

      {/* Set up alerts */}
      <div>
        <h2>Set up Alerts</h2>
        {/* Include form elements for alert setup */}
        <button onClick={handleAlertSetup}>Set Alert</button>
      </div>
    </div>
  );
}

export default App;
