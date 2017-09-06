package main

import (
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/k2wanko/tasting-grpc-web/echo"
	"golang.org/x/net/context"
	"google.golang.org/appengine"
	"google.golang.org/grpc"
)

func main() {
	appengine.Main()
}

func init() {
	grpcSrv := grpc.NewServer()
	echo.RegisterEchoServiceServer(grpcSrv, &echoService{})
	wrappedServer := grpcweb.WrapServer(grpcSrv)
	http.Handle("/", wrappedServer)
}

type echoService struct{}

func (s *echoService) Echo(ctx context.Context, req *echo.EchoRequest) (res *echo.EchoResponse, err error) {
	res = &echo.EchoResponse{
		Message: req.Message,
	}
	return
}

func (s *echoService) EchoAbort(ctx context.Context, req *echo.EchoRequest) (res *echo.EchoResponse, err error) {
	//TODO implement
	return
}

func (s *echoService) NoOp(ctx context.Context, _ *echo.Empty) (_ *echo.Empty, err error) {
	//TODO implement
	return
}

func (s *echoService) ServerStreamingEcho(req *echo.ServerStreamingEchoRequest, res echo.EchoService_ServerStreamingEchoServer) (err error) {
	//TODO implement
	return
}

func (s *echoService) ServerStreamingEchoAbort(req *echo.ServerStreamingEchoRequest, ss echo.EchoService_ServerStreamingEchoAbortServer) (err error) {
	//TODO implement
	return
}

func (s *echoService) ClientStreamingEcho(cs echo.EchoService_ClientStreamingEchoServer) (err error) {
	//TODO implement
	return
}

func (s *echoService) FullDuplexEcho(ss echo.EchoService_FullDuplexEchoServer) (err error) {
	//TODO implement
	return
}

func (s *echoService) HalfDuplexEcho(ss echo.EchoService_HalfDuplexEchoServer) (err error) {
	//TODO implement
	return
}
