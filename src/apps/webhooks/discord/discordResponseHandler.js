export function gateway_Opcode_Handler(opcode)
{
    switch (opcode)
    {
        case 0:
            Console.log("An event was Recieved");
            break;
        case 1:
            Console.log("Heartbeat active");
            break;
        case 2:
            Console.log("Identity handshake");
            break;
        case 3:
            Console.log("Presence update");
            break;
        case 4:
            Console.log("Voice Status Update");
            break;
        case 5:
            Console.log("null");
            break;
        case 6:
            Console.log("Resume");
            break;
        case 7:
            Console.log("Reconnect");
            break;
        case 8:
            Console.log("Request Guild Members");
            break;
        case 9:
            Console.log("Invalid Session");
            break;
        case 10:
            Console.log("Recieved Hello");
            break;
        case 11:
            Console.log("Recieved Heartbeat ACK");
            break;
    }
}