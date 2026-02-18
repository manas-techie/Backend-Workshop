import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });

//get a list of five jokes
//when we write api response there are some standard format to follow /api/endpoint is the standard format for api response
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 2,
            title: "What do you call a fake noodle?",
            content: "An impasta!"
        },
        {
            id: 3,
            title: "How does a penguin build its house?",
            content: "Igloos it together!"
        },
        {
            id: 4,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 5,
            title: "What do you call a bear with no teeth?",
            content: "A gummy bear!"
        }
    ];
    res.json(jokes);
});

app.listen(port, () => {
    console.log(`Listing at port no: ${port}`);
});
