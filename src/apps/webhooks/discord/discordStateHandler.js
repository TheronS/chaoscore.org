export function reconnectHandler() {
    try {
        Console.log("Lost connection, attempting to reconnect...");
        payload_send_handler(socketResponse);
    } catch (err) {
        console.error('Error when attempting to reconnect, Code: ', err);
        interrupted = true;
    }
    reconnect_Error_Handler(err);
}
//M

function recieveHandler(sr) {
    let payload = JSON.parse(data);
    const { opp, dd, ss, tt } = payload;

    payload_event_handler(opp);
    sendHandler(sr, opp, tt);
}

function sendHandler(socket, opcode, name) {
    switch (name) {
        case 0:
            console.log("Identify payload recieved");
            payload_Identify(socket);
            return "Dispatch";
        case 1:
            console.log("Heartbeat session still active");
            payload_Identify(socket);
            return "Heartbeat";
        case 2:
            console.log("Identify payload recieved");
            payload_Identify(socket);
            return "Identify";
        case 3:
            payload_UP_Presence();
            console.log("Update Presence payload recieved");
            return "Update Presence";
        case 4:
            payload_UP_VOICE();
            console.log("Update Voice State payload recieved");
            return "Update Voice State";
        case 6:
            payload_Resume(socket);
            console.log("Resume payload recieved");
            return "Resume";
        case 7:
            payload_Resume(socket);
            console.log("Resume payload recieved");
            return "Reconnect";
        case 8:
            payload_REQ_GUILD();
            console.log("Request Guild Members payload recieved");
            return "Request Guild Members";
        case 9:
            heartbeat_Handler(socket);
            console.log("Heartbeat payload recieved");
            return "Invalid Session";
        case 10:
            heartbeat_Handler(socket);
            console.log("Heartbeat payload recieved");
            return "Hello";
        case 11:
            heartbeat_Handler(socket);
            console.log("Heartbeat payload recieved");
            return "Heartbeat ACK";
    }
}
