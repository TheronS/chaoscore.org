const axios = require('axios');

// Replace 'YOUR_WEBHOOK_URL' with the actual webhook URL you obtained from Discord
const webhookUrl = 'https://discord.com/api/webhooks/1205112957650870332/mp7Wibp7MqYghuqL3ynzPH0s7OVQ-WWwzlE7ln9BK4xFtCaMag4EXxiSq0WdEpztSO3k';

// Message payload
const message = {
    content: 'Your message here'
};

// Send message
axios.post(webhookUrl, message)
    .then(response => {
        console.log('Message sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
