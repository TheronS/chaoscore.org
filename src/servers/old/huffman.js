class Huffman {
  static huffmanTree = {};
  static huffmanTable = {};

  static huffmanFrq = [
    0.14473691, 0.01147017, 0.00167522, 0.03831121, 0.00356579, 0.03811315, 0.00178254, 0.00199644, 0.00183511,
    // ... (remaining array elements)
  ];

  static buildBinaryTree() {
    if (Huffman.huffmanTree) {
      return;
    }

    for (let i = 0; i < 256; i++) {
      Huffman.huffmanTree[i] = { frq: Huffman.huffmanFrq[i], asc: i };
    }

    for (let i = 0; i < 255; i++) {
      let lowestKey1 = -1;
      let lowestKey2 = -1;
      let lowestFrq1 = 1E30;
      let lowestFrq2 = 1E30;

      for (let j = 0; j < 256; j++) {
        if (!Huffman.huffmanTree[j]) {
          continue;
        }

        if (Huffman.huffmanTree[j].frq < lowestFrq1) {
          lowestKey2 = lowestKey1;
          lowestFrq2 = lowestFrq1;
          lowestKey1 = j;
          lowestFrq1 = Huffman.huffmanTree[j].frq;
        } else if (Huffman.huffmanTree[j].frq < lowestFrq2) {
          lowestKey2 = j;
          lowestFrq2 = Huffman.huffmanTree[j].frq;
        }
      }

      Huffman.huffmanTree[lowestKey1] = {
        frq: lowestFrq1 + lowestFrq2,
        branch0: Huffman.huffmanTree[lowestKey2],
        branch1: Huffman.huffmanTree[lowestKey1],
      };
      Huffman.huffmanTree[lowestKey2] = null;
    }

    Huffman.huffmanTree = Huffman.huffmanTree[lowestKey1];
  }

  static binaryTreeToLookupTable(branch, binaryPath = "") {
    if (binaryPath === "" && Huffman.huffmanTable) {
      return;
    }

    if (branch.branch0) {
      Huffman.binaryTreeToLookupTable(branch.branch0, binaryPath + "0");
      Huffman.binaryTreeToLookupTable(branch.branch1, binaryPath + "1");
      return;
    }

    Huffman.huffmanTable[branch.asc] = binaryPath;
  }

  static encode(dataString) {
    Huffman.buildBinaryTree();
    Huffman.binaryTreeToLookupTable(Huffman.huffmanTree);

    let binaryString = "";

    for (let i = 0; i < dataString.length; i++) {
      const ascii = dataString.charCodeAt(i);
      const binaryPath = Huffman.huffmanTable[ascii];
      binaryString += binaryPath;
    }

    const paddingValue = 8 - (binaryString.length % 8);
    const paddedBinaryString = paddingValue.toString(2).padStart(8, '0') + binaryString;

    let encodedString = "";

    for (let i = 0; i < paddedBinaryString.length; i += 8) {
      const binaryChunk = paddedBinaryString.substr(i, 8);
      const decimalValue = parseInt(binaryChunk, 2);
      const encodedChar = String.fromCharCode(decimalValue);
      encodedString += encodedChar;
    }

    return encodedString;
  }

  static decode(dataString) {
    Huffman.buildBinaryTree();
    Huffman.binaryTreeToLookupTable(Huffman.huffmanTree);

    const paddingLength = dataString.charCodeAt(0);
    let binaryString = "";

    for (let i = 1; i < dataString.length; i++) {
      binaryString += dataString.charCodeAt(i).toString(2).padStart(8, '0');
    }

    binaryString = binaryString.substr(0, binaryString.length - paddingLength);

    let decodedString = "";

    while (binaryString.length > 0) {
      for (const [ascii, binaryPath] of Object.entries(Huffman.huffmanTable)) {
        const binaryLength = binaryPath.length;

        if (binaryString.startsWith(binaryPath)) {
          decodedString += String.fromCharCode(parseInt(ascii, 10));
          binaryString = binaryString.substr(binaryLength);
          continue;
        }
      }
      break;
    }

    return decodedString;
  }
}

// Example usage:
const encodedData = Huffman.encode("Hello, World!");
console.log("Encoded:", encodedData);

const decodedData = Huffman.decode(encodedData);
console.log("Decoded:", decodedData);
