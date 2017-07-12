let express=require('express');
let app=express();
app.listen(3000);

let ad=require('./home/ad');
//广告接口
app.get('/api/ad',(req,res)=>{
    res.send(ad);
});

//fetch 前端获取后端数据的方法

