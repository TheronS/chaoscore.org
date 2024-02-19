import React, { useState } from 'react';

const Serverlist = ({ requestFlag, decodedRequest, binaryTree, huffmanTable }) => {
  const [encodedData, setEncodedData] = useState('');

  const fetchData = async () => {
    const data = 'Your data to encode';  // Replace with your actual data
    const response = await fetch('/api/encode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    const result = await response.json();
    setEncodedData(result.encoded_data);
  };

  return (
    <div>
      <h1>Sample Website</h1>
      <p>Request Flags: {requestFlag}</p>
      <p>Decoded Request: {decodedRequest}</p>

      <h2>Huffman Tree:</h2>
      <pre>{JSON.stringify(binaryTree, null, 2)}</pre>

      <h2>Huffman Table:</h2>
      <pre>{JSON.stringify(huffmanTable, null, 2)}</pre>

      <button onClick={fetchData}>Fetch Encoded Data</button>
      <p>Encoded Data: {encodedData}</p>
    </div>
  );
};

export default Serverlist;
