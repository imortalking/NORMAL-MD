




// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Adams-2024;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1IYjludE1PSSs0OUR0WS9EQjY2cVpZYWRzRklIWGdaRll4dGNYVmwzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjNFZDBpeGlyRkppaDNJQmFOTlZydzQ2K2E2c01KTU1BdmI0b2dkMGNXYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Rk5SL29XTlBXc0p2TWF5TnY3REhoOFZQTVF1Nk55NWtVOU9Tblg1TzBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bmtLM0R5TkYzYitNYjRqSk1MM3FVYjVSTWdCZnprcWRPMlNEUjFYOVdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCZFhuSUVESWhiMnlmNm4weG9Xa0VVanZIamo0ZjNKYjBYd3hKWk9vR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQvRW5CTE5aTTJkWDNVOHJrY1ZVNC9xbjhjOWpjK0phcUQzZWlUclZxRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNMTnpkMFQ5UG5tcGtVYTZSYU9PSGdFUzZhUEd6ZUVzQWRnemtWWklFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFJGYkVtdG8vUlptazVWR0duK3FGQnJ1b2tsOTY1bG00THRYM0pYUjFUYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE2SEVyek9xVmE2SDRibGdtTFZsbVE4aXhqb2ljYUNzZjFqRWNsaVoxcFVFajJQaE5WMkJtZVNmeU96Nmt0MGxoa2p3THZqZ3JVMHFpNkpkYWF3cWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJXUDBVVDVCd3R3VlZSWWZaVjVuUktNSnlDV1d0MHVaazhHdWYwV1IvLy9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3Sm96TnJrLVFEZWFrNktuajBua2J3IiwicGhvbmVJZCI6ImRjMGEyNTk3LTQwMTMtNGI0ZS1iNThhLTlkOTYxZWFiN2E0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDNkk2UXQ0bnhFS0hPdzA4QmYxNmcrb0c3OFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU41QnhXeVFEMDVzUFRxVWVHZ1pvd293MmhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ3SFRHMU1GIiwibWUiOnsiaWQiOiIyNjM3MTQ3NTc4NTc6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIeWl2Z0VFSXZYM3JnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkE0ZTg2UjYzVXA2SEFzbkFYQjNmaTA1TEJWNkpzUGxlMW9pb29Ra3NSamM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InROVkJDYUdwR1M3QnQvS3pNQUN2ektGTm1tOFhyRUd1SFEyU21wT3pmNTNpMmpMVnJXKzZUb2JxKzZnbm1kQ3krdWRlRG5uVnR1Q3NKSGRNS0N5MURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjWlBNLzNBblFKQzlLcXFlcUpnTWdwcHh1UXcwN2lEdko4Y3YvejFWV2J2MUIvYTAxZ25QcmJURGJ0NGdBK3c2cXVJdWlPUnRXZ1p2Ky9Tb3RtU3BpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDc1Nzg1NzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRT0h2T2tldDFLZWh3TEp3RndkMzR0T1N3VmVpYkQ1WHRhSXFLRUpMRVkzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NjA0NTA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpFdCJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "© Malvin King",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263780166288",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
