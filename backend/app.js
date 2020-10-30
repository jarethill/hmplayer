const express = require('express');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const BASE_URL = `http://localhost:${PORT}`;

app.use(cors());

const fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

app.get('/:directory/:video', function (req, res) {
    const { directory, video } = req.params;

    const path = `${directory}/${video}`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });

        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };

        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };

        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
});

app.listen(PORT, () => {
    console.log(`Listening at ${BASE_URL}`);
});
