const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const port=3000;
const jsonParser=bodyParser.json();

app.use(cors());
app.use(jsonParser);

app.get('/',(req, res) =>{
  res.send('Welcome')
}
)

app.get('/first',(req,res)=>{
  res.json(
    {
      data:["ravi","ram","seta","goodies"]
    }
  )
})
app.get('/calculate',(req,res)=>{
  const {numbe}=req.params;
  const ans=numbe.toInteger()
  const anss=ans*ans;
  res.json({ans:anss});

})









app.listen(port,()=>{
  console.log('listening on port '+port)
})






