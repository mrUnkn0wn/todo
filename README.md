
brew install docker docker-compose docker-machine xhyve docker-machine-driver-xhyve
docker-compose up
docker-compose stop
docker-compose down -v
docker exec -it todo_db_1 psql -U postgres
docker exec -it todo_db_1 bash
