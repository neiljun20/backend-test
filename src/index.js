const { PORT } = require('./config');
const app = require('./app');

try{

  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
  });

} catch(e){

  console.error(e);
  process.exit(1);
  
}

