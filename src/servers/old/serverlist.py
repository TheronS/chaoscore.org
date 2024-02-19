from flask import Flask, render_template
from your_huffman_module import Huffman

app = Flask(__name__)

SQF_NAME = 0x00000001
SQF_PWADS = 0x00000040

request_flag = (SQF_NAME | SQF_PWADS)

request = b'\x00\x00\x00\xc7' + request_flag.to_bytes(4, 'little') + b'\x21\x21\x21\x21'
encoded_request = Huffman.encode(request.decode())
decoded_request = Huffman.decode(encoded_request)

binary_tree = Huffman.huffman_tree
huffman_table = Huffman.huffman_table

@app.route('/')
def index():
    return render_template('index.html', request_flag=request_flag, decoded_request=decoded_request, binary_tree=binary_tree, huffman_table=huffman_table)

@app.route('/api/encode', methods=['POST'])
def encode_data():
    if request.method == 'POST':
        data = request.json.get('data', '')
        encoded_data = Huffman.encode(data)
        return jsonify({'encoded_data': encoded_data})

if __name__ == '__main__':
    app.run(debug=True)

