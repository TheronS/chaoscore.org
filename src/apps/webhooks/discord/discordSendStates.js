function sendReqIdentify(socket) {

    payload.JSON = {
        op: 2, //identification
        d: {
            token: token,
            intents: 513,
            properties: {
                $os: 'linux',
                $browser: 'chrome',
                $device: 'chrome'
            }
        }
    }
}

function sendReqResume() {
    payload.JSON = {
        "op": 6,
        "d": {
            "token": token,
            "session_id": "evenmorerandomstring",
            "seq": 1337
        }
    }
    webS_send_json_request(ws, payload.JSON);
}