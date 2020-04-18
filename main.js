import app from './app';

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(`\u274c Error occurred: ${err} `);
  }
  console.log(`\u2705 Server running on port ${PORT} `);
});
