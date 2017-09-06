// package: grpc.gateway.testing.echo
// file: echo.proto

import * as echo_pb from "./echo_pb";
export class EchoService {
  static serviceName = "grpc.gateway.testing.echo.EchoService";
}
export namespace EchoService {
  export class Echo {
    static readonly methodName = "Echo";
    static readonly service = EchoService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = echo_pb.EchoRequest;
    static readonly responseType = echo_pb.EchoResponse;
  }
  export class EchoAbort {
    static readonly methodName = "EchoAbort";
    static readonly service = EchoService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = echo_pb.EchoRequest;
    static readonly responseType = echo_pb.EchoResponse;
  }
  export class NoOp {
    static readonly methodName = "NoOp";
    static readonly service = EchoService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = echo_pb.Empty;
    static readonly responseType = echo_pb.Empty;
  }
  export class ServerStreamingEcho {
    static readonly methodName = "ServerStreamingEcho";
    static readonly service = EchoService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = echo_pb.ServerStreamingEchoRequest;
    static readonly responseType = echo_pb.ServerStreamingEchoResponse;
  }
  export class ServerStreamingEchoAbort {
    static readonly methodName = "ServerStreamingEchoAbort";
    static readonly service = EchoService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = echo_pb.ServerStreamingEchoRequest;
    static readonly responseType = echo_pb.ServerStreamingEchoResponse;
  }
  export class ClientStreamingEcho {
    static readonly methodName = "ClientStreamingEcho";
    static readonly service = EchoService;
    static readonly requestStream = true;
    static readonly responseStream = false;
    static readonly requestType = echo_pb.ClientStreamingEchoRequest;
    static readonly responseType = echo_pb.ClientStreamingEchoResponse;
  }
  export class FullDuplexEcho {
    static readonly methodName = "FullDuplexEcho";
    static readonly service = EchoService;
    static readonly requestStream = true;
    static readonly responseStream = true;
    static readonly requestType = echo_pb.EchoRequest;
    static readonly responseType = echo_pb.EchoResponse;
  }
  export class HalfDuplexEcho {
    static readonly methodName = "HalfDuplexEcho";
    static readonly service = EchoService;
    static readonly requestStream = true;
    static readonly responseStream = true;
    static readonly requestType = echo_pb.EchoRequest;
    static readonly responseType = echo_pb.EchoResponse;
  }
}
