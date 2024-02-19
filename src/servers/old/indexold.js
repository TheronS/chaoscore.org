import React from 'react';
import ReactDOM from 'react-dom';
import Serverlist from './serverlist';

const SQF_NAME = 0x00000001;
const SQF_PWADS = 0x00000040;

const requestFlag = SQF_NAME | SQF_PWADS;

// Simulate the decoded request, binary tree, and Huffman table
const decodedRequest = 'SampleDecodedRequest';
const binaryTree = { /* Your Huffman tree data */ };
const huffmanTable = { /* Your Huffman table data */ };

ReactDOM.render(
  <React.StrictMode>
    <Serverlist
      requestFlag={requestFlag}
      decodedRequest={decodedRequest}
      binaryTree={binaryTree}
      huffmanTable={huffmanTable}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
