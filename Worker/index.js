var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')

// fetch github jobs
new CronJob('*/10 * * * *', fetchGithub, null, true, 'Asia/Kolkata');
