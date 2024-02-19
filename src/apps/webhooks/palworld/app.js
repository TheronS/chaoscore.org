import 'dotenv/config';
import express from 'express';
import { Embed, Client } from 'discord.js';
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from 'discord-interactions';
import { VerifyDiscordRequest, getRandomEmoji, DiscordRequest } from './utils.js';
import { WebhookClient } from 'discord.js';
import { sendMessage, decimalToHex } from './sendmessage.js';
//import {webS_recieve_json_response} from './discord.auth.js'
import { json } from "body-parser.js";

const app = express();
const port = 3000; // Set your desired port

const webhookClient = new WebhookClient({
    url: 'https://discord.com/api/webhooks/1205175093244985345/SOVYCcXtSorjZ4emYdG273bWtlyuqreImn0RfTirBC7duYiG-NmqpeD6MtxZyyvBQb7A',
  });
  

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests
app.post('/webhooks', (req, res) => {
    // Check the request headers to identify the source
    const userAgent = req.get('User-Agent');
    console.log(userAgent);

        // Ensure request body exists
        if (!req.body) {
          console.error('Request body is empty');
          return res.sendStatus(400);
      }

    // If the request is from Palworld
    //if (userAgent && userAgent.includes('Palworld')) {
      // Handle Palworld request
      //const content = req.body.content;
      //const { title, desc, color } = req.body.embed;
      //const embededmsg  = { title, desc, color };
      //console.log('Received webhook from Palworld:', { content, embedmsg });
      //const { embededmsg.title, embededmsg.desc, embededmsg.color };
      //console.log('Embed info:', { embededmsg });
    // If the request is from Palworld
    const webhookURL = webhookClient.url;
    console.log(webhookURL); // Output the URL to the console
    if (userAgent && userAgent.includes('curl/7.74.0')) {
      // Handle Palworld request
      const { data } = req.body;
      let jsonData = JSON.Parse(data);
      var content = jsonData.content;
      var embeds = jsonData.embeds;
      var title = embeds[0].title;
      var description = embeds[0].description;
      var color = embeds[0].color;              
      console.log("Content:", content);
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("Color:", color);
      console.log('Received webhook from Palworld:', { content, embeds });
      //const newMessage = formatWebhookString(title,description);
      //sendBasicMessage(newMessage,
         // webhookURL,
      //).catch((error) => console.error('Error sending message to Discord:', error));
      client.once('ready', () => {
        token: process.env.DISCORD_TOKEN
        const channel = client.channels.cache.get('1205112858241794098')
        let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setAuthor(client.user.tag)
        .setDescription(description)
        .setColor(color)
        channel.send({ embeds: [ embed ] });
      })
      return res.send('Webhook received successfully from Palworld');
  } else {
      // If the request is from Discord
      // Assuming it follows a certain format
      const { type, data } = req.body;
      console.log('Received interaction from Discord:', { type, data });
      if (type === 'PING') {
          return res.json({ type: 1 });
      } else if (type === 'APPLICATION_COMMAND') {
          // Handle Discord interaction
          const { name } = data;
          if (name === 'test') {
              return res.json({
                  type: 4,
                  data: {
                      content: 'hello world',
                  },
              });
          }
      }
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on http://0.0.0.0:${port}`);
});

function recieve_json_response(data) {
  if (data) {
      return json.loads(response);
  }
}

//app.listen(port, '::', () => {
  //console.log(`Server is listening on http://[::]:${port}`);
//});
