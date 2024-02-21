export function sendReqIdentify() {

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
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqResume() {
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

export function sendReqHeartbeat() {
    payload.JSON = {
        "op": 1,
        "d": 251
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqReconnect() {
    payload.JSON = {
        "op": 7,
        "d": null
    }
    webS_send_json_request(ws, payload.JSON);
}

function sendReqInvalidSession() {
    payload.JSON = {
        "op": 9,
        "d": true
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqHeartbeatAck() {
    payload.JSON = {
        "op": 11,
        "d": null
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqGuildRequest() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqVoiceUpdate() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "channel_id": "155149108183695360",
            "self_mute": false,
            "self_deaf": false
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqVoiceStateUpdate() {
    payload.JSON = {
        "op": 4,
        "d": {
            "guild_id": "41771983423143937",
            "channel_id": "155149108183695360",
            "self_mute": false,
            "self_deaf": false
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqRequestGuildMembers() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqCreateMessage() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqUpdateMessage() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqDeleteMessage() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqBulkDeleteMessages() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqEditChannelPermissions() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqEditMember() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqEditRole() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqEditRolePosition() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

export function sendReqEditChannelPosition() {
    payload.JSON = {
        "op": 8,
        "d": {
            "guild_id": "41771983423143937",
            "query": "WoW"
        }
    }
    webS_send_json_request(ws, payload.JSON);
}

// Path: src/apps/webhooks/discord/discordSendStates.js