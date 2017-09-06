/**
 * @fileoverview gRPC Web JS generated client stub for grpc.testing.echo
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.provide('proto.grpc.testing.echo.EchoServiceClient');

goog.require('grpc.web.GatewayClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('proto.grpc.testing.echo.ClientStreamingEchoRequest');
goog.require('proto.grpc.testing.echo.ClientStreamingEchoResponse');
goog.require('proto.grpc.testing.echo.EchoRequest');
goog.require('proto.grpc.testing.echo.EchoResponse');
goog.require('proto.grpc.testing.echo.Empty');
goog.require('proto.grpc.testing.echo.ServerStreamingEchoRequest');
goog.require('proto.grpc.testing.echo.ServerStreamingEchoResponse');



/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @constructor
 * @struct
 * @final
 */
proto.grpc.testing.echo.EchoServiceClient =
    function(hostname, credentials, options) {
  /**
   * @private @const {!grpc.web.GatewayClientBase} The client
   */
  this.client_ = new grpc.web.GatewayClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.testing.echo.EchoRequest,
 *   !proto.grpc.testing.echo.EchoResponse>}
 */
const methodInfo_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.testing.echo.EchoResponse,
  /** @param {!proto.grpc.testing.echo.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.testing.echo.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.testing.echo.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.testing.echo.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.testing.echo.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.testing.echo.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.testing.echo.EchoService/Echo',
      request,
      metadata,
      methodInfo_Echo,
      callback);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.testing.echo.EchoRequest,
 *   !proto.grpc.testing.echo.EchoResponse>}
 */
const methodInfo_EchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.testing.echo.EchoResponse,
  /** @param {!proto.grpc.testing.echo.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.testing.echo.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.testing.echo.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.testing.echo.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.testing.echo.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.testing.echo.EchoServiceClient.prototype.echoAbort =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.testing.echo.EchoService/EchoAbort',
      request,
      metadata,
      methodInfo_EchoAbort,
      callback);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.testing.echo.Empty,
 *   !proto.grpc.testing.echo.Empty>}
 */
const methodInfo_NoOp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.testing.echo.Empty,
  /** @param {!proto.grpc.testing.echo.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.testing.echo.Empty.deserializeBinary
);


/**
 * @param {!proto.grpc.testing.echo.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.testing.echo.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.testing.echo.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.testing.echo.EchoServiceClient.prototype.noOp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.testing.echo.EchoService/NoOp',
      request,
      metadata,
      methodInfo_NoOp,
      callback);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.testing.echo.ServerStreamingEchoRequest,
 *   !proto.grpc.testing.echo.ServerStreamingEchoResponse>}
 */
const methodInfo_ServerStreamingEcho = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.testing.echo.ServerStreamingEchoResponse,
  /** @param {!proto.grpc.testing.echo.ServerStreamingEchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.testing.echo.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.testing.echo.ServerStreamingEchoRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.testing.echo.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.testing.echo.EchoServiceClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpc.testing.echo.EchoService/ServerStreamingEcho',
      request,
      metadata,
      methodInfo_ServerStreamingEcho);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.testing.echo.ServerStreamingEchoRequest,
 *   !proto.grpc.testing.echo.ServerStreamingEchoResponse>}
 */
const methodInfo_ServerStreamingEchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.testing.echo.ServerStreamingEchoResponse,
  /** @param {!proto.grpc.testing.echo.ServerStreamingEchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.testing.echo.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.testing.echo.ServerStreamingEchoRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.testing.echo.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.testing.echo.EchoServiceClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpc.testing.echo.EchoService/ServerStreamingEchoAbort',
      request,
      metadata,
      methodInfo_ServerStreamingEchoAbort);
};

goog.object.extend(exports, proto.grpc.testing.echo);

