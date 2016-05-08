var pickItem = require('pick-item');

var ChewbaccaQuotes = [
   "RRWWWGG",
   "GGWWWRGHH",
   "RAWRGWAWGGR",
   "RRRAARRWHHGWWR",
   "AAARARRRGWWWH",
   "GGGWARRRHHWWWW",
   "WWWRRRRRRGWWWRRRR",
   "WWWWWWWGGGGHHHRRRRW",
   "RWGWGWARAHHHHWWRGGWRWRW",
   "WAGRRRRWWGAHHHHWWWRRGGAWWWWWWRR",
];

module.exports = function() {
   return pickItem(ChewbaccaQuotes);
};
