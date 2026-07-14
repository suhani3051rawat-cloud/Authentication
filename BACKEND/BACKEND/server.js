import app from './app.js'
import { mongodb } from './dataBase/db.js';

app.listen(process.env.PORT, ()=>{
      console.log(`server is running on ${process.env.PORT} `);
})
mongodb();