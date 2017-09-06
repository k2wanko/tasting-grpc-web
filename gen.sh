#!/bin/bash

mkdir -p ./echo
mkdir -p ./src/proto

protoc \
    --go_out=plugins=grpc:./echo \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./src/proto \
    --ts_out=service=true:./src/proto \
    ./echo.proto