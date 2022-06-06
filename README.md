
## Installation

```bash
$ npm install
```

## Running the app loal

edit DB_HOST in env file to connect mongodb your self

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```
## Docker-compose (recommend)

```bash
# build
$ docker-compose build

# run
$ docker-compose up -d
```

Assignment flow:
- User can search product with name/brand/color, sort 
- Query of user will store to log db for advertising
- 2 services to demostrade microserice: api service, log service
   + api service use middleware to emit an event (logger.middleware.ts)
   + log service listen to this event and add log to database (log.controller.ts)
   ```
  @EventPattern('log')
  addLog(data: any): any {
    console.log();
    const d = JSON.parse(data);
    this.logService.addLog(d.identify, d.query);
  }
  ```


Add mock products 
```
curl http://localhost:3000/product/mock_data
```

Get product api 
```
curl http://localhost:3000/product?sort_by=name&sort=desc&page=0&color=red 
```

Check log database to see log event




