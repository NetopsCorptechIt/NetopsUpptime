module.exports = {
  urls: [
    'https://sms.filinvest.com.ph',  // Replace with your first URL
    'https://another-site.com',  // Another URL to monitor
  ],
  pingInterval: 60 * 60 * 1000,  // Check every hour (in milliseconds)
  alertThreshold: 3,  // Alert after 3 consecutive failures
};
