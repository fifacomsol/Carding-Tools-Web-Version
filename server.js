const http = require('http');
const fs = require('fs');
const path = require('path');

// MIME types mapping
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.csv': 'text/csv',
  '.svg': 'image/svg+xml'
};

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Parse URL to determine file path
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html'; // Default to index.html for the root path
  }
  
  // Get file extension to determine content type
  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  // Read the file and send response
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        console.error(`File not found: ${filePath}`);
        res.writeHead(404);
        res.end('404 - File Not Found');
      } else {
        // Server error
        console.error(`Server error: ${err}`);
        res.writeHead(500);
        res.end('500 - Internal Server Error');
      }
    } else {
      // Success - send file content
      console.log(`Serving file: ${filePath}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start server
const PORT = 5000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log('Available files:');
  console.log('- index.html (main application)');
  console.log('- bin-list-data.csv (BIN data file)');
});
