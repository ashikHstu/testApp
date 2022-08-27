var format = require('date-format');
let time = format.asString(format.ISO8601_WITH_TZ_OFFSET_FORMAT, new Date());
console.log(time);