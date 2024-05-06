export const dummyResponse = (req,res)=>{
    res.send('App is running...')
}

export const generateImage = (req,res)=>{
    const body = req.body;
    console.log("body::",body);
    res.json({
        status:"success",
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg',
    });
}