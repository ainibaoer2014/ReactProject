let express=require('express');
let app=express();
app.listen(3000);

//广告接口
let ad=require('./home/ad');
app.get('/api/ad',(req,res)=>{
    res.send(ad);
});

//列表页接口 展示哪个城市的列表  需要传递城市,页码
let list=require('./home/list');
app.get('/api/list/:city/:page',(req,res)=>{
    // console.log(req.params.city);
    // console.log(req.params.page);
    res.send(list);
});
