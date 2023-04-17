import express, { response } from "express"
import cors from 'cors'
import router from "./routes/routers";
const app = express();
const PORT = 8003

app.use(cors())
app.use(express.json())


app.use('/', router)

app.listen(PORT,()=>{
   console.log("app lisitning on",PORT);
   
})