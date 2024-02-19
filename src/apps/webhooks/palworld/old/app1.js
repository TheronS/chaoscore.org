//require('dotenv').config('./.env');
//require('dotenv').config();
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
import { VerifyDiscordRequest, getRandomEmoji, DiscordRequest } from '../../discord/utils.js';
import { WebhookClient } from 'discord.js';
import { sendMessage, decimalToHex } from '../../discord/sendmessage.js';

const webhookClient = new WebhookClient({
  url: 'https://discord.com/api/webhooks/1205175093244985345/SOVYCcXtSorjZ4emYdG273bWtlyuqreImn0RfTirBC7duYiG-NmqpeD6MtxZyyvBQb7A',
});

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;

//const appHostname = app.(Domain(app.post.res.data.url));

//webhookClient.send({
  //content: ,
  //username: 'PalK1ng',
  //avatarURL: 'https://i.imgur.com/KEungv8.png',
//});

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */

app.post('/webhooks', async function (req, res) {


  // Interaction type and data
  if (res.type = "pal") 
  {
    {
      const { title, desc, color } = req.body;
      color = decimalToHex(color)
      const embed = new Embed()
      {
        setColor(color)
        setTitle(title)
        setDescription(desc)
      } 
      return sendMessage(
        {
          avatar_url: 'https://i.imgur.com/KEungv8.png',
          username: 'PalK1ng',
          embeds: [embed],
        },
        WebhookClient.url,
        ).catch((error) => console.error(error));
      }
      //const channel = await <client>.channels.cache.find(channel => channel.name === "bot-server-feed")
      //console.log(client.channels)
      //channel.send("My Message");
     // send an embed and change the user again
  }

  
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

  // return message.channel.send({ embeds: [embed] });
  const { type, id, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    // "test" command
    if (name === 'test') {
      // Send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // Fetches a random emoji to send from a helper function
          content: 'hello world ' + getRandomEmoji(),
        },
      });
    }
  }
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
