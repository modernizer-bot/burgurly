import express from 'express'
const app=express();
app.listen(4000,()=>{
  console.log('server started on 4000');
  
});
app.get('/api/users/',(req,res)=>{
  res.send('hi there')
})