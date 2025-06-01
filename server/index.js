import express from 'express';
import cors from 'cors';

const app = express();

// Simplified CORS for testing - you can restrict later
app.use(cors({
  origin: [
     'https://shubhdeepnirmal.github.io',
      'https://shubhdeepnirmal.github.io/',
      'https://shubhdeepnirmal.github.io/battlefield',
     'https://shubhdeepnirmal.github.io/battlefield/'
  ]
}));

// Add a basic route to test if server is working
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.get('/api/data-json', (req, res) => {
  res.json({
    serverstats: [
      { label: 'PLAYERS', value: '64/64' },
      { label: 'PING', value: '20' },
      { label: 'TICKRATE', value: '64 Hz' },
    ],
    settings: [
      { label: 'REGION', value: 'EUROPE - DE' },
      { label: 'PUNKBUSTER', value: 'ON' },
      { label: 'FAIRFIGHT', value: 'ON' },
      { label: 'PASSWORD', value: 'OFF' },
      { label: 'PRESET', value: 'NORMAL' }
    ],
    advanced: [
      { label: 'MINIMAP', value: 'ON' },
      { label: 'VEHICLES', value: 'ON' },
      { label: 'TEAM BALANCE', value: 'ON' },
      { label: 'HUD', value: 'ON' },
      { label: '3P VEHICLE CAM', value: 'ON' }
    ],
    rules: [
      { label: 'TICKETS', value: '400' },
      { label: 'SPAWN DELAY', value: '25' },
      { label: 'BULLET DAMAGE', value: '100' },
      { label: 'RESPAWN TIME', value: '100' },
      { label: 'KICK AFTER IDLE', value: '300' }
    ]
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});