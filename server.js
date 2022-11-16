
const express = require('express');
const port    = 3000;
const app     = express();

const fs      = require('fs');


app.engine('website', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')
            .replace('#content2#', '<div>' + options.content2 + '</div>');
        return callback(null, rendered);
    });
});


app.set('views', './views');
app.set('view engine', 'website');


app.get('/', (req, res) => {
    res.render('template', {
        title: 'HOME',
        message: 'Home Page',
        content: '<a href="/about">Next Page: About</a>'
    });
});

app.get('/about', (req, res) => {
    res.render('template', {
        title: 'ABOUT',
        message: 'About Page',
        content: '<a href="/hobbies">Next Page: hobbies</a>'
    });
});

app.get('/hobbies', (req, res) => {
    res.render('template', {
        title: 'hobbies',
        message: 'hobbies Page',
        content: '<a href="/books">Next Page: books </a>'
    });
});

app.get('/books', (req, res) => {
    res.render('template', {
        title: 'books',
        message: 'books Page',
        content: '<a href="/friends">Next Page: friends</a>'
    });
});

app.get('/friends', (req, res) => {
    res.render('template', {
        title: 'friends',
        message: 'friends Page',
        content: '<a href="/education">Next Page: education</a>'
    });
});



app.get('/education', (req, res) => {
    res.render('template2', {
        message: 'Education Page (Template 2)',
        content2: '<a href="/activities">Next Page: activities </a>'
    });
});

app.get('/activities', (req, res) => {
    res.render('template2', {
        message: 'Activiies Page (Template 2)',
        content2: '<a href="/contact">Next Page: contact </a>'
    });
});

app.get('/contact', (req, res) => {
    res.render('template2', {
        message: 'contact Page (Template 2)',
        content2: '<a href="/colors">Next Page: colors </a>'
    });
});

app.get('/colors', (req, res) => {
    res.render('template2', {
        message: 'Colors Page (Template 2)',
        content2: '<a href="/travel">Next Page: travel</a>'
    });
});

app.get('/travel', (req, res) => {
    res.render('template2', {
        message: 'travel Page (Template 2)',
        content2: '<a href="/">Next Page: Home</a>'
    });
});




app.listen(port, () => {
    console.log('listening on port', port)
});
