install:
	npm i

dev:
	npx webpack serve

build:
	rm -rf public
	npx webpack

lint:
	npx eslint .

push:
	git push -u origin main

.PHONY: test
