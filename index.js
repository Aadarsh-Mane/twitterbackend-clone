const PORT = 5000; // Use PORT environment variable or default to 5000
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome to blog/post api")
    // res.send(quotes)
    // res.send("hello")
});
app.get('/random', (req, res) => {
    let index=Math.floor(Math.random()*quotes.length)
    let quote=quotes[index]
    res.send(quote)
    // res.send("hello")
});
mongoose.connect('mongodb+srv://onlyaddy68:onlyaddy123@confess.bgv01wx.mongodb.net/twitterbackend?retryWrites=true&w=majority&appName=confess').then(()=>{
        app.listen(PORT, ()=>{
            console.log("listening on port",PORT)
        
        });
    })