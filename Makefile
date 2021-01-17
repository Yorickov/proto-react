up: docker-up
down: docker-down

install:
	npm ci

dev:
	npx webpack serve

prod: docker-down build-frontend build-server docker-up

deploy: webpack-prod build-prod
	docker-compose -f docker-compose-production.yml up --remove-orphans -d

build-frontend: clean
	NODE_ENV=production npx webpack

build-server:
	docker build --file=docker/nginx/Dockerfile --tag=proto-react-nginx .

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

lint:
	npx eslint .

push:
	git push -u origin main

clean:
	rm -rf public

.PHONY: test
