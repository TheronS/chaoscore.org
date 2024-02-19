export function sendMessage(payload, webhookUrl) {
    const data = typeof payload === 'string' ? { content: payload } : payload;
  
    return new Promise((resolve, reject) => {
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            reject(new Error(`Could not send message: ${response.status}`));
          }
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }

export function sendBasicMessage(stringmessage, webhookUrl) {
  const message = stringmessage;
  return new Promise((resolve, reject) => {
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`Could not send message: ${response.status}`));
        }
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export function formatWebhookString(title, desc, id)
{
  const formatted = "**" + title + "**\n\ndesc"
}

export function decimalToHex(decimalColor) {
    // Convert the decimal color to hexadecimal format
    const hexColor = decimalColor.toString(16).padStart(6, '0');
    // Prepend '#' to the hexadecimal color
    return `#${hexColor}`;
  }

  // send a simple message
// sendMessage('Hello from my app!', WEBHOOK_URL).catch((error) =>
//console.error(error),
//);

// send a message, but change the username and the avatar
//sendMessage(
///{
 // content: 'Hello from my app!',
// avatar_url: 'https://i.imgur.com/KEungv8.png',
 // username: 'Test Hook',
//},
//WEBHOOK_URL,
//).catch((error) => console.error(error));

//const appId = process.env.APP_ID;
///const globalEndpoint = `applications/${appId}/commands`;
//try {
  // Send HTTP request with bot token
  //const res = await DiscordRequest(globalEndpoint, {
    //method: 'POST',
    //body: commandBody,
  //});
  //console.log(await res.json());
//} catch (err) {
  //console.error('Error installing commands: ', err);
//}