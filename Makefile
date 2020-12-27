install:
	npm i

dev:
	npx webpack serve

build:
	rm -rf public
	NODE_ENV=production npx webpack

lint:
	npx eslint .

push:
	git push -u origin main

.PHONY: test
