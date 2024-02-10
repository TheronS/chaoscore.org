// import("dotenv");
// import WebSocket from "ws";
// import { time } from "discord.js";
// import BodyReadable from "undici/types/readable";
// const { json } = require("body-parser");
// const { time, Console } = require("console");
// const { REST } = require("discord.js");
// const { TokenClass } = require("typescript");
// const WebSocket = require("ws");
// import { reconnect_Error_Handler } from './socket_code_handler.js';
// import { TIMEOUT } from "dns";
// const token = process.env.DISCORD_TOKEN;
// let heartbeat = 0;
// const heartbeat_interval = 0;
// const heartbeat_active = 0;
// const CONNECTION_WAIT_TIME = 5000;
// const CONNECTION_CYCLES = 3;
// const RECONNECTION_MAX_ATTEMPTS = 5;
// const RECONNECTION_ATTEMPTS = 0;

// export function initialize_Socket_Connection() {
//     const webS = new WebSocket;
//     webS.CONNECTING('wss://gateway.discord.gg/?v=10&encoding=json');
//     while (!socketResponse) {
//         for (i = 0; i <= CONNECTION_WAIT_TIME; i++) {
//             socketResponse = webS_recieve_json_response(webS);
//             setTimeout(function () { }, CONNECTION_WAIT_TIME);
//             RECONNECTION_ATTEMPTS++;
//             console.log("Waiting... " + i);
//         }
//     }

//     if (socketResponse) {
//         socket_Data_Handler(socketResponse);
//         Console.log("Connection Initialized successfully");
//     } else {
//         Console.log("Unable to establish Socket Connection");
//     }
// }

// export function webS_send_json_request(ws, request) {
//     ws.send(json.dumps(request));
// }

// export function webS_recieve_json_response(ws) {
//     response = ws.recv();
//     if (response) {
//         return json.loads(response);
//     }
// }

// export function socket_Data_Handler(jData) {
//     let payload = JSON.parse(JData);
//     //const { t, event, op, d } = payload;
//     payload_send_handler(jData);
//     if (jData) //&& payload != null)
//     {
//         if (heartbeat == true) {
//             payload_recieve_handler(socket);
//         } else {
//             payload_send_handler(socket);
//         }
//     }
// }

// function heartbeat_Handler(socket) {//state) {

//     if (!heartbeat) {
//         heartbeat.interval = socket['d']['heartbeat_interSval'] / 1000;
//         heartbeat_Init_Proc(heartbeat.interval);
//     }
//     if (heartbeat == true && socket == false) {
//         print("Socket ended before Heartbeat");
//         heartbeat.interval = 0;
//     }
// }

// function heartbeat_Init_Proc(hbint) {
//     print("Heartbeat begin");
//     while (hbint >= 0) {
//         time.sleep(hbint);
//         heartbeat.JSON =
//         {
//             "op": 1,
//             "d": 251
//         }
//         webS_send_json_request(ws, heartbeat.JSON);
//         print('Heartbeat Sent');
//     }
//     print('Heartbeat Ended');
//     //heartbeat_End();
// }

// //     socket.onopen = (event) => {
// //         console.log("Connection established")
// //     }
// //     socket.onclose = (event) => {
// //         console.log(`Connection closed: code=${event.code} reason=${event.reason}`)
// //     }


// function payload_recieve_handler(sr) {
//     let payload = JSON.parse(data);
//     const { opp, dd, ss, tt } = payload;

//     payload_event_handler(opp);
//     payload_send_handler(sr, opp, tt);
// }

// function payload_send_handler(socket, opcode, name) {
//     switch (name) {
//         case 0:
//             console.log("Identify payload recieved");
//             payload_Identify(socket);
//             return "Dispatch";
//         case 1:
//             console.log("Heartbeat session still active");
//             payload_Identify(socket);
//             return "Heartbeat";
//         case 2:
//             console.log("Identify payload recieved");
//             payload_Identify(socket);
//             return "Identify";
//         case 3:
//             payload_UP_Presence();
//             console.log("Update Presence payload recieved");
//             return "Update Presence";
//         case 4:
//             payload_UP_VOICE();
//             console.log("Update Voice State payload recieved");
//             return "Update Voice State";
//         case 6:
//             payload_Resume(socket);
//             console.log("Resume payload recieved");
//             return "Resume";
//         case 7:
//             payload_Resume(socket);
//             console.log("Resume payload recieved");
//             return "Reconnect";
//         case 8:
//             payload_REQ_GUILD();
//             console.log("Request Guild Members payload recieved");
//             return "Request Guild Members";
//         case 9:
//             heartbeat_Handler(socket);
//             console.log("Heartbeat payload recieved");
//             return "Invalid Session";
//         case 10:
//             heartbeat_Handler(socket);
//             console.log("Heartbeat payload recieved");
//             return "Hello";
//         case 11:
//             heartbeat_Handler(socket);
//             console.log("Heartbeat payload recieved");
//             return "Heartbeat ACK";
//     }
// }

// function payload_Identify(socket) {

//     payload.JSON = {
//         op: 2, //identification
//         d: {
//             token: token,
//             intents: 513,
//             properties: {
//                 $os: 'linux',
//                 $browser: 'chrome',
//                 $device: 'chrome'
//             }
//         }
//     }
// }

// function payload_Resume() {
//     payload.JSON = {
//         "op": 6,
//         "d": {
//             "token": token,
//             "session_id": "evenmorerandomstring",
//             "seq": 1337
//         }
//     }
//     webS_send_json_request(ws, payload.JSON);
// }


// function payload_REQ_GUILD() {
//     //not using yet, if i ever do i'll know.
//     console.log("reached request guild");
// }

// function payload_UP_VOICE() {
//     //not using yet, if i ever do i'll know.
//     console.log("reached update voice");
// }

// function payload_UP_Presence() {
//     //not using yet, if i ever do i'll know.
//     console.log("update presences");
// }

// export function reconnect_Handler() {
//     try {
//         Console.log("Lost connection, attempting to reconnect...");
//         payload_send_handler(socketResponse);
//     } catch (err) {
//         console.error('Error when attempting to reconnect, Code: ', err);
//         interrupted = true;
//     }
//     reconnect_Error_Handler(err);
// }

// ws.on('open', function open() {
//     ws.send(JSON.stringify(payload));
// });

// ws.on('message', function incoming(data) {
//     let payload = JSON.parse(data)
//     const { t, event, op, d } = payload;
// });
// //MTkxNzQyMTE3MTg0Mjc0NDMy.GSnBMO.Yzw9djzPjQe9Xo6BKIdNw5OpvdL8eIAXYU3ejQ token
// //1205112858241794098chanid
