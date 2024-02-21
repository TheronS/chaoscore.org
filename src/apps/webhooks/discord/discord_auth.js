import("dotenv");
import WebSocket from "ws";
//import { time } from "discord.js";
import BodyReadable from "undici/types/readable";
import { json }from "body-parser";
import { REST } from  "discord.js";
import { TokenClass } from "typescript";
import { reconnect_Error_Handler } from './discordErrorHandler.js';
import { TIMEOUT } from "dns";
import { code, empty } from "statuses";
const token = process.env.DISCORD_TOKEN;
let heartbeat = 0;
const heartbeat_interval = 0;
const heartbeat_active = 0;
const CONNECTION_WAIT_TIME = 5000;
const CONNECTION_CYCLES = 3;
const RECONNECTION_MAX_ATTEMPTS = 5;
const RECONNECTION_ATTEMPTS = 0;

export function initSocketConn() {
    const webS = new WebSocket;
    webS.CONNECTING('wss://gateway.discord.gg/?v=10&encoding=json'); {
        console.log("Connecting to Discord Gateway");
        //let socketResponse = webS_recieve_json_response(webS);

        //try (webS_recieve_json_response(webS))

       // }

        while (socketResponse == null && RECONNECTION_ATTEMPTS < RECONNECTION_MAX_ATTEMPTS) {
        for (i = 0; i <= CONNECTION_WAIT_TIME; i++) {
            console.log("Attempting response... " + i + " of " + RECONNECTION_MAX_ATTEMPTS);
            socketResponse = webS_recieve_json_response(webS);
            setTimeout(function () { }, CONNECTION_WAIT_TIME);
            RECONNECTION_ATTEMPTS++;
          }
        }
        if (RECONNECTION_ATTEMPTS == RECONNECTION_MAX_ATTEMPTS) {
            console.log("Failed to connect to Discord Gateway, please try again later");
            RECONNECTION_ATTEMPTS = 0;
            return;
        }
        console.log("Connected to Discord Gateway, Recieving Payloads");
    }
}

export function webSock_send_json(ws, request) {
    ws.send(json.dumps(request));
    console.log("Sending request: " + request);
}

export function webSock_recieve_json(ws) {
    response = ws.recv();
    if (response) {
        return json.loads(response);
    } else err = new error(response.err); {
        console.log(err);
        return;
    }
}

webS.on('open', function open() {
    ws.send(JSON.stringify(payload));
});

// webS.close() {
//     console.log('Disconnected');
//     reconnect_Handler();
// };

webS.on('message', function incoming(data) {
    let payload = JSON.parse(data)
    const { t, event, op, d } = payload;
});

function heartbeat_Handler(socket) {//state) {

    if (!heartbeat) {
        heartbeat.interval = socket['d']['heartbeat_interSval'] / 1000;
        heartbeat_Init_Proc(heartbeat.interval);
    }
    if (heartbeat == true && socket == false) {
        print("Socket ended before Heartbeat");
        heartbeat.interval = 0;
    }
}

export function socketDataHandler(jData) {
    let payload = JSON.parse(JData);
    //const { t, event, op, d } = payload;
    payload_send_handler(jData);
    if (jData) //&& payload != null)
    {
        if (heartbeat == true) {
            payload_recieve_handler(socket);
        } else {
            payload_send_handler(socket);
        }
    }
}

function heartbeatInitProc(hbint) {
    print("Heartbeat begin");
    while (hbint >= 0) {
        time.sleep(hbint);
        heartbeat.JSON =
        {
            "op": 1,
            "d": 251
        }
        webS_send_json_request(ws, heartbeat.JSON);
        print('Heartbeat Sent');
    }
    print('Heartbeat Ended');
    //heartbeat_End();
}

//     socket.onopen = (event) => {
//         console.log("Connection established")
//     }
//     socket.onclose = (event) => {
//         console.log(`Connection closed: code=${event.code} reason=${event.reason}`)
//     }

function payload_REQ_GUILD() {
    //not using yet, if i ever do i'll know.
    console.log("reached request guild");
}

function payload_UP_VOICE() {
    //not using yet, if i ever do i'll know.
    console.log("reached update voice");
}

function payload_UP_Presence() {
    //not using yet, if i ever do i'll know.
    console.log("update presences");
}