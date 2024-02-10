// function socketConnectionHandler(response) {
//     let socket = new WebsetSocket(${ response.url } + "?v=6&encording=json")

//     socket.onopen = (event) => {
//         console.log("Connection established")
//     }
//     socket.onclose = (event) => {
//         console.log(`Connection closed: code=${event.code} reason=${event.reason}`)
//     }

//     socket.addEventListener('message', (event) => {
//         console.log(`Data received: ${event.data}`)
//         hello = JSON.parse(event.data)
//         if (hello.op == 10) {
//             let alive = true
//             heartbeat(socket, hello.s, hello.d.heartbeat_interval, alive)
//             socket.send(JSON.stringify({
//                 "op": 2,
//                 "d": {
//                     "token": "MY_BOT_TOKEN_THIS_IS_A_PLACEHOLDER_DONT_TELL_ME_ITS_WRONG_IN_COMMENTS",
//                     "properties": {
//                         "$os": "linux",
//                         "$device": "chrome",
//                         "$browser": "chrome"
//                     },
//                     "guild_subscriptions": false,
//                     "intents": 1
//                 }
//             }))
//             socket.removeEventListener('message')
//             socket.addEventListener('message', (event) => {
//                 if (JSON.parse(event.data).op !== 11) {
//                     console.log(`Message received: ${event.data}`)
//                 }
//             })
//         }
//     })
// }
