import React, { useState, useEffect } from 'react';

const ServerList = () => {
  const [serverList, setServerList] = useState([]);

  useEffect(() => {
    // Fetch data from your backend
    fetch('/servers/serverlist')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setServerList(data);
      })
      .catch(error => console.error('Error fetching server list:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Server List</h1>
      <ul>
        {serverList.map(server => (
          <li key={server.id}>{server.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
