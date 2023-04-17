import express, { response } from "express"
const app = express();
const PORT = 3001
app.get('/',(req ,resp)=>{
  response.send({message:"hell from server"})
})
app.listen(PORT,()=>{
   console.log("app lisitning on",PORT);
   
})