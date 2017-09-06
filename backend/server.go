package main

import (
	"fmt"
	"net/http"
	"time"

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

func (s *echoService) ServerStreamingEcho(req *echo.ServerStreamingEchoRequest, ss echo.EchoService_ServerStreamingEchoServer) (err error) {
	ctx := ss.Context()

	c := int(req.MessageCount)
	if c > 10 {
		c = 10
	}

	iv := int(req.MessageInterval)
	if iv > 5 {
		iv = 5
	}

	for i := 0; i < c; i++ {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
			res := &echo.ServerStreamingEchoResponse{Message: fmt.Sprintf("%d:%s", i+1, req.Message)}
			ss.Send(res)
			time.Sleep(time.Duration(iv) * time.Second)
		}
	}
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
