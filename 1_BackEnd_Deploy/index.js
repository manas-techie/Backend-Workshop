require('dotenv').config()

const express = require('express')
// import express from 'express';
const app = express()

const githubData = {
    "login": "manas-techie",
    "id": 191120827,
    "node_id": "U_kgDOC2RFuw",
    "avatar_url": "https://avatars.githubusercontent.com/u/191120827?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/manas-techie",
    "html_url": "https://github.com/manas-techie",
    "followers_url": "https://api.github.com/users/manas-techie/followers",
    "following_url": "https://api.github.com/users/manas-techie/following{/other_user}",
    "gists_url": "https://api.github.com/users/manas-techie/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/manas-techie/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/manas-techie/subscriptions",
    "organizations_url": "https://api.github.com/users/manas-techie/orgs",
    "repos_url": "https://api.github.com/users/manas-techie/repos",
    "events_url": "https://api.github.com/users/manas-techie/events{/privacy}",
    "received_events_url": "https://api.github.com/users/manas-techie/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Manas Sidh",
    "company": null,
    "blog": "",
    "location": "Jaipur ",
    "email": null,
    "hireable": null,
    "bio": "Code. Train. Deploy. Repeat. 🔄 | AI/ML Enthusiast crafting smart solutions | Constantly learning, constantly shipping.",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-12-09T12:54:28Z",
    "updated_at": "2026-02-17T17:58:40Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('manas-techie')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello World</h1>')
}
)
app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})