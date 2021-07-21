import express from 'express'
import { errorHandler } from './middlewares/error-handler';
import { signUpRouter } from './routes/signUp';
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(signUpRouter);
app.get('/api/users/',(req,res)=>{
  throw new Error('faulty');
})
app.use(errorHandler);
app.listen(4000,()=>{
  console.log('server started on 4000');
  
});
