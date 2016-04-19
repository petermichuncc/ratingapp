cd C:\Program Files\MongoDB\Server\3.2\bin
START mongod --port 3001
timeout /t 10
cd %0\..\
START node app.js