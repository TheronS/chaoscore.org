class Huffman:
    huffman_tree = []
    huffman_table = []

    # STATIC FREQUENCY TABLE WHERE THE INDEX ( 0 - 255 ) IS THE ASCII NUMBER
    huffman_frq = [
        0.14473691, 0.01147017, 0.00167522, 0.03831121, 0.00356579, 0.03811315, 0.00178254, 0.00199644, 0.00183511,
        # ... (rest of the array elements)
    ]

    @staticmethod
    def build_binary_tree():
        # CHECK IF TREE HAS ALREADY BEEN BUILT
        if Huffman.huffman_tree:
            return

        # CREATE STARTING LEAVES
        for i in range(256):
            Huffman.huffman_tree.append({"frq": Huffman.huffman_frq[i], "asc": i})

        # PAIR LEAVES AND BRANCHES BASED ON FREQUENCY UNTIL THERE IS A SINGLE 'ROOT'
        for _ in range(255):
            lowest_key1 = -1
            lowest_key2 = -1
            lowest_frq1 = 1E30
            lowest_frq2 = 1E30

            # FIND THE LOWEST TWO FREQUENCIES
            for j in range(256):
                if Huffman.huffman_tree[j] is False:
                    continue

                if Huffman.huffman_tree[j]['frq'] < lowest_frq1:
                    lowest_key2 = lowest_key1
                    lowest_frq2 = lowest_frq1
                    lowest_key1 = j
                    lowest_frq1 = Huffman.huffman_tree[j]['frq']
                elif Huffman.huffman_tree[j]['frq'] < lowest_frq2:
                    lowest_key2 = j
                    lowest_frq2 = Huffman.huffman_tree[j]['frq']

            # JOIN THE TWO TOGETHER UNDER A NEW BRANCH
            Huffman.huffman_tree[lowest_key1] = {
                "frq": lowest_frq1 + lowest_frq2,
                "branch0": Huffman.huffman_tree[lowest_key2],
                "branch1": Huffman.huffman_tree[lowest_key1]
            }
            Huffman.huffman_tree[lowest_key2] = False

        # MAKE THE ROOT THE ARRAY
        Huffman.huffman_tree = Huffman.huffman_tree[lowest_key1]

    @staticmethod
    def binary_tree_to_lookup_table(branch, binary_path=""):
        # CHECK IF TABLE HAS ALREADY BEEN BUILT
        if binary_path == "" and Huffman.huffman_table:
            return

        # GO THROUGH BRANCHES FINDING LEAVES WHILE TRACKING THE BINARY PATH TAKEN
        if 'branch0' in branch:
            Huffman.binary_tree_to_lookup_table(branch['branch0'], binary_path + "0")
            Huffman.binary_tree_to_lookup_table(branch['branch1'], binary_path + "1")
            return

        Huffman.huffman_table[branch['asc']] = binary_path

    @staticmethod
    def encode(data_string):
        Huffman.build_binary_tree()
        Huffman.binary_tree_to_lookup_table(Huffman.huffman_tree)

        binary_string = ""
        # MATCH ASCII TO ENTRIES IN LOOKUP TABLE
        for char in data_string:
            ascii_val = ord(char)
            binary_path = Huffman.huffman_table[ascii_val]
            binary_string += binary_path

        # IN THE FIRST BYTE STORE THE NUMBER OF PADDING BITS
        padding_value = 8 - (len(binary_string) % 8)
        padding_value = format(padding_value, '08b')[::-1]
        binary_string = padding_value + binary_string

        # CONVERT BINARY STRING INTO ASCII
        encoded_string = ""
        for i in range(0, len(binary_string), 8):
            binary_chunk = binary_string[i:i + 8]
            binary_chunk = int(binary_chunk[::-1], 2)
            encoded_string += chr(binary_chunk)

        return encoded_string

    @staticmethod
    def decode(data_string):
        Huffman.build_binary_tree()
        Huffman.binary_tree_to_lookup_table(Huffman.huffman_tree)

        # GET AND REMOVE THE NUMBER OF PADDING BITS STORED IN THE FIRST BYTE
        padding_length = ord(data_string[0])
        data_string = data_string[1:]

        # CONVERT ASCII STRING INTO BINARY STRING
        binary_string = ""
        for char in data_string:
            binary_string += format(ord(char), '08b')[::-1]

        # REMOVE PADDING BITS FROM THE END
        binary_string = binary_string[:-padding_length]

        decoded_string = ""
        # MATCH BINARY TO ENTRIES IN LOOKUP TABLE
        while binary_string:
            for ascii_val, binary_path in Huffman.huffman_table.items():
                binary_length = len(binary_path)

                if binary_string[:binary_length] == binary_path:
                    decoded_string += chr(ascii_val)
                    binary_string = binary_string[binary_length:]
                    break

        return decoded_string


# EXAMPLE USAGE:

SQF_NAME = 0x00000001
SQF_URL = 0x00000002
# ... (rest of the constants)

request_flag = (SQF_NAME | SQF_URL | SQF_EMAIL | SQF_MAPNAME | SQF_MAXCLIENTS | SQF_MAXPLAYERS | SQF_PWADS | SQF_GAMETYPE | SQF_GAMENAME | SQF_IWAD | SQF_FORCEPASSWORD | SQF_FORCEJOINPASSWORD | SQF_GAMESKILL | SQF_BOTSKILL | SQF_DMFLAGS | SQF_LIMITS | SQF_TEAMDAMAGE | SQF_NUMPLAYERS | SQF_PLAYERDATA | SQF_TEAMINFO_NUMBER | SQF_TEAMINFO_NAME | SQF_TEAMINFO_COLOR | SQF_TEAMINFO_SCORE | SQF_TESTING_SERVER | SQF_DATA_MD5SUM)
request_flag = (SQF_NAME | SQF_URL | SQF_EMAIL | SQF_MAPNAME | SQF_MAXCLIENTS | SQF_MAXPLAYERS | SQF_PWADS | SQF_GAMETYPE | SQF_GAMENAME | SQF_IWAD | SQF_FORCEPASSWORD | SQF_FORCEJOINPASSWORD | SQF_GAMESKILL | SQF_BOTSKILL | SQF_DMFLAGS | SQF_LIMITS | SQF_TEAMDAMAGE | SQF_NUMPLAYERS | SQF_PLAYERDATA | SQF_TEAMINFO_NUMBER | SQF_TEAMINFO_NAME | SQF_TEAMINFO_COLOR | SQF_TEAMINFO_SCORE)

request = b'\x00\x00\x00\xc7' + request_flag.to_bytes(4, 'little') + b'\x21\x21\x21\x21'
encoded_request = Huffman.encode(request.decode())
decoded_request = Huffman.decode(encoded_request)

