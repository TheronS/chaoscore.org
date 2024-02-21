export function gatewayErrorHandler(err) {
if (interrupted == true) {
    switch (err) {
        case 4000:
            Console.log("Unknown error");
            break;
        case 4001:
            Console.log("Invalid Gateway opcode");
            break;
        case 4002:
            Console.log("invalid payload");
            break;
        case 4003:
            Console.log("Not authenticated");
            break;
        case 4004:
            Console.log("Authentication failed");
            break;
        case 4005:
            Console.log("Already authenticated");
            break;
        case 4006:
            Console.log("Invalid seq, reconnect");
            break;
        case 4007:
            Console.log("Too many payloads, Disconnected");
            break;
        case 4008:
            Console.log("Session timed out");
            break;
        case 4009:
            Console.log("Invalid shard");
            break;
        case 4010:
            Console.log("Sharding required");
            break;
        case 4011:
            Console.log("Invalid API version");
            break;
        case 4012:
            Console.log("Invalid Gateway Intent POST");
            break;
        case 4013:
            Console.log("Insufficnet Permissions for Intent");
            break;
        case 4014:
            Console.log("Something else???");
            break;
         }
    }
}