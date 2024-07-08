import { connectToMongoDB } from "./db.config.js";
import { app } from "./index.js";


app.listen(3000,()=>{
    console.log('Application is listening at port 3000');
    connectToMongoDB();
})