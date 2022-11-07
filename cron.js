const cron = require('node-cron');
cron.schedule("3 * * * * *", () => {
    console.log("Cron is working!!!")
})



//first install node-cron  by command ==> npm i node-cron
// Then require it by const crom=require('node-cron')
// then use cron.schedule("",()=>{
    // console.log("-----")
// })


// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *


// second	0-59
// minute	0-59
// hour	0-23
// day of month	1-31
// month	1-12 (or names)
// day of week	0-7 (or names, 0 or 7 are sunday)