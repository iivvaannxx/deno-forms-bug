#!/usr/bin/env bash

docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t deno-forms-bug .
docker run -d -p 80:8000 deno-forms-bug && echo -e "\nApp running on port 80."
