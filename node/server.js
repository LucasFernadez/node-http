
const http = require('http');
const data = require('./data'); 


const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
   
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>
            <h1><strong>${data.title}</strong></h1>
            <h2>${data.subtitle}</h2>
            <p>${data.description}</p>
            <footer>
                <p>Autor: ${data.author}</p>
            </footer>
        </body>
        </html>
    `;
    
   
    res.end(htmlContent);
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
