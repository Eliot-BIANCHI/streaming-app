import express from 'express'
import { config } from 'dotenv'
config()

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/static'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
    const moviesSections = [
        { 
            name: 'Film Noir',
            movies: [
                { movieId: 1, title: 'Rebecca', posterURL: '/images/movies/posters/rebecca.jpg' },
                { movieId: 2, title: 'Night and the City', posterURL: '/images/movies/posters/night-and-the-city.jpg' },
                { movieId: 3, title: 'He Walked by Night', posterURL: '/images/movies/posters/he-walked-by-night.jpg' },
                { movieId: 4, title: 'No Way Out', posterURL: '/images/movies/posters/no-way-out.jpg' },
                { movieId: 5, title: 'Sudden Fear', posterURL: '/images/movies/posters/sudden-fear.jpg' },
                { movieId: 6, title: 'Union Station', posterURL: '/images/movies/posters/union-station.jpg' }
            ]
        },
        { 
            name: 'History',
            movies: [
                { movieId: 11, title: 'Spartacus', posterURL: '/images/movies/posters/spartacus.jpg' },
                { movieId: 12, title: 'Abel Gance\'s Napoleon', posterURL: '/images/movies/posters/napoleon-vu-par-abel-gance.jpg' },
                { movieId: 13, title: 'The King\'s Speech', posterURL: '/images/movies/posters/the-kings-speech.jpg' },
                { movieId: 14, title: 'Bronenosets Potemkin', posterURL: '/images/movies/posters/bronenosets-potemkin.jpg' },
                { movieId: 15, title: 'Breach', posterURL: '/images/movies/posters/breach.jpg' },
                { movieId: 16, title: 'Kagemusha', posterURL: '/images/movies/posters/kagemusha.jpg' },
                { movieId: 17, title: 'The Last Kingdom', posterURL: '/images/movies/posters/the-last-kingdom.jpg' },
                { movieId: 18, title: 'Nixon', posterURL: '/images/movies/posters/nixon.jpg' },
                { movieId: 19, title: 'A night to remember', posterURL: '/images/movies/posters/a-night-to-remember.jpg' },
                { movieId: 20, title: 'Manhattan', posterURL: '/images/movies/posters/manhattan.jpg' },
                { movieId: 21, title: 'Malcom X', posterURL: '/images/movies/posters/malcolm-x.jpg' }
            ]
        },
        { 
            name: 'Western',
            movies: [
                { movieId: 22, title: 'The good, the bad and the ugly', posterURL: '/images/movies/posters/the-good-the-bad-and-the-ugly.jpg' },
                { movieId: 23, title: 'Django unchained', posterURL: '/images/movies/posters/django-unchained.jpg' },
                { movieId: 23, title: 'For a few dollars more', posterURL: '/images/movies/posters/for-a-few-dollars-more.jpg' },
                { movieId: 23, title: 'Duel in the Sun', posterURL: '/images/movies/posters/duel-in-the-sun.jpg' },
                { movieId: 23, title: 'Meek\'s Cutoff', posterURL: '/images/movies/posters/meeks-cutoff.jpg' }
            ]
        },
    ]


    res.render('index', { moviesSections })
})

const SERVER_PORT = process.env.SERVER_PORT
app.listen(SERVER_PORT, () => { console.log(`Listen on localhost:${SERVER_PORT}`) })