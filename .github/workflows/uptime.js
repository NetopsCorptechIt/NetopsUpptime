module.exports = {
  urls: [
    'https://example.com',  // Add site here
    'https://sms.filinvest.com.ph',  // Another host to monitor
    'https://your-service.com', // Another service to monitor
  ],
  pingInterval: 60 * 60 * 1000,  // Check every hour (in milliseconds)
  alertThreshold: 3,  // Alert after 3 consecutive failures
};
