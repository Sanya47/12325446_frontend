const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());

let bookingsData = [];

fs.createReadStream('C:\Users\Sanya\Desktop\assignment\hotel-dashboard\hotel-api\newfile.csv')
  .pipe(csv())
  .on('data', (row) => {
    bookingsData.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/bookings', (req, res) => {
  const { startDate, endDate } = req.query;
  const filteredData = bookingsData.filter((booking) => {
    // filter by date range (implement date logic here)
    return true;
  });
  res.json(filteredData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
