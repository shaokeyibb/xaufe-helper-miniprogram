const url = require('url')

const express = require('express');
const app = express()
const port = 9000

const rp = require('request-promise')

app.use(express.json());

app.post('/', async (req, res) => {
  const jar = rp.jar()

  try {
    const response = await rp({
      ...req.body,
      resolveWithFullResponse: true,
      simple: false,
      jar: jar
    })
    res.json(response)
  } catch (e) {
    res.json(e)
    console.error(e)
  }
})

app.listen(port, () => {
  console.log("Successfully loaded")
})