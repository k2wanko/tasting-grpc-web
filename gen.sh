#!/bin/bash

mkdir -p ./echo
mkdir -p ./src/proto

GRPC_WEB_PLUGIN_PATH=${GRPC_WEB_PLUGIN_PATH:=${GOPATH}/src/github.com/grpc/grpc-web/javascript/net/grpc/web/protoc-gen-grpc-web}

protoc \
    --go_out=plugins=grpc:./echo \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./src/proto \
    --ts_out=service=true:./src/proto \
    --plugin=protoc-gen-grpc-web=${GRPC_WEB_PLUGIN_PATH} \
    --grpc-web_out=out=./src/proto/echo.grpc.pb.js,mode=base64:. \
    ./echo.proto