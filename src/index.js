/* eslint-env node */

const { PORT } = require("./config");
const app = require("./app");
const redis = require("./utils/redis");

try{

  redis.on("error", err => console.error("Redis Error", err));

  redis.connect(() => {
    console.log("Redis connected");
  });

  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
  });

} catch(e){

  console.error(e);
  process.exit(1);
  
}