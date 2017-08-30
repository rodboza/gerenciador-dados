

let server = require('./config/server');
let port = process.env.PORT || 3000;


server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
  });

