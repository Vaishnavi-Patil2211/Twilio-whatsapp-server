const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
const express = require('express');
const router = express.Router();

router.post('/image', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.From,
        body: "Nutritional Food",
        mediaUrl: "https://i.pinimg.com/originals/92/82/93/92829318f319e3e164d06bef169a5974.jpg"
      })
      .then(message => res.send(message))
      .catch(err => {
        console.log(err);
        res.send(err)
      })
});

router.post('/video', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.From,
        body: "Bear Video",
        mediaUrl: "https://images.all-free-download.com/footage_preview/mp4/buoy_6891600.mp4"
      })
      .then(message => res.send(message))
      .catch(err => {
        console.log(err);
        res.send(err)
      })
})



router.post('/document', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.From,
        mediaUrl: 'https://www.tutorialspoint.com/docker/docker_tutorial.pdf'
      })
      .then(message => res.send(message))
      .catch(err => {
        console.log(err);
        res.send(err)
      })
})

router.post('/default', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.From,
        body: "Welcome to Twilio Whatsapp "
      })
      .then(message => res.send(message))
      .catch(err => {
        console.log(err);
        res.send(err)
      })
}
)

module.exports = router;




