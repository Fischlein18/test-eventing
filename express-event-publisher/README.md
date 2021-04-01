# An Event Publisher service in Express.js

## A sample Express service that:
1. create interation
2. save interaction in mongodb
3. submit event of type 'createInteraction'
4. (to do) submit event to the Kafka Event Bus

---

## How to execute the service in your local machine
1. pull mongodb image:
    `sudo docker pull mongo`

2. start mongodb in docker container:
    - (for the first time only) create a /mongodata directory on the host system: `sudo mkdir -p /mongodata`
    - start container for the first time: `sudo docker run -it -v mongodata:/data/db --name mongodb -d mongo`
    - restart container: `sudo docker start mongodb`

3. create docker image of the service:
    `sudo docker build -t express-event-publisher .`

4. start the service in docker container:
    `sudo docker run -d --link mongodb:mongodb -p 9000:3000 express-event-publisher`

5. start brower: `localhost:9000` 

6. to check data in mongodb:
    - connect to the container bash: `sudo docker exec -it mongodb bash`
    - start mongodb shell: `mongo`
    - select database: `use score-srv-poc`
    - list all collections: `show collections`
    - list data in the 'interactions' collection: `db.interactions.find()`