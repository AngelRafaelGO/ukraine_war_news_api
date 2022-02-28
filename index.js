const PORT = process.env.PORT || 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

const sources = [
    {
        name: 'the guardian',
        address: 'https://www.theguardian.com/international',
        base: ''
    },
    {
        name: 'nyt',
        address: 'https://www.nytimes.com/section/world',
        base: 'https://www.nytimes.com'
    },
    {
        name: 'the economist',
        address: 'https://www.economist.com/',
        base: ''
    },
    {
        name: 'the telegraph',
        address: 'https://www.telegraph.co.uk/news/',
        base:'https://www.telegraph.co.uk'
    },
    {
        name: 'der spiegel',
        address: 'https://www.spiegel.de/schlagzeilen/',
        base: ''
    },
    {
        name: 'le figaro',
        address: 'https://www.lefigaro.fr/international',
        base: ''
    },
    {
        name: 'the bulletin',
        address: 'https://thebulletin.org/nuclear-risk/',
        base: ''
    },
    {
        name: 'wsj',
        address: 'https://www.wsj.com/news/world?mod=nav_top_section',
        base: ''
    },
    {
        name: 'nyp',
        address: 'https://nypost.com/news/',
        base: ''
    },
    {
        name: 'el pais',
        address: 'https://english.elpais.com/',
        base: ''
    }
];

const ukraineArticles = [];

sources.forEach(source => {
    axios.get(source.address).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        $('a:contains("Ukraine")', html).each(function () {
            const title = $(this).text();
            const url = $(this).attr('href');

            ukraineArticles.push({
                title,
                url: source.base + url,
                source: source.name
            });
        });
    });
});

app.get('/', (req, res) => {
    res.json('Welcome to my Ukraine war API');
});

app.get('/news', (req, res) => {
    res.json(ukraineArticles);
});

app.get('/news/:newspaperId', (req, res) => {
    const newsPaperId = req.params.newspaperId;

    const newsPaperAddress = sources.filter(sources => sources.name === newsPaperId)[0].address;
    const newsPaperBase = sources.filter(sources => sources.name === newsPaperId)[0].base;

    axios.get(newsPaperAddress).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const specificArticles = [];

        $('a:contains("Ukraine")', html).each(function () {
            const title = $(this).text();
            const url = $(this).attr('href');
            specificArticles.push({
                title,
                url: newsPaperBase + url,
                sources: newsPaperId
            });
        });
        res.json(specificArticles);
    }).catch(err => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));