import app from "./app.js";
import { connectDb } from "./db.js";
import {PORT} from './config.js';

connectDb();
app.listen(PORT, () => {
    console.log('Server is running on port 4000');
  });