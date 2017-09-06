<template>
  <div id="#app">
    <h1>tasting-grpc-web</h1>
    <div>
      <div>
        <h2>EchoSerivce.Echo</h2>
        Request: <input type="text" placeholder="message" v-model="echoReq"><br> Result:
        <span>{{echoRes}}</span><br>
        <button @click="echo(echoReq)">echo</button>
      </div>

      <div>
        <h2>EchoSerivce.ServerStreamingEcho</h2>
        Request: <input type="text" placeholder="message" v-model="echoReq"><input type="number" placeholder="count" v-model="echoReqCount"><input type="number" placeholder="interval" v-model="echoReqInterval"><br> Result:
        <span>{{echoRes}}</span><br>
        <button @click="streamingEcho(echoReq, echoReqCount, echoReqInterval)">echo</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { grpc, Code, Metadata } from 'grpc-web-client'
import { EchoService } from './proto/echo_pb_service'
import {
  EchoRequest,
  EchoResponse,
  ServerStreamingEchoRequest,
  ServerStreamingEchoResponse,
} from './proto/echo_pb'

const host = 'http://localhost:8080'

@Component
export default class App extends Vue {
  echoReq = ""
  echoReqCount = 10
  echoReqInterval = 1
  echoRes = ""

  mounted() {
  }

  echo(message: string): void {
    new Promise<EchoResponse>((resolve, reject) => {
      const request = new EchoRequest()
      request.setMessage(message)
      grpc.invoke(EchoService.Echo, {
        request,
        host,
        onMessage: (message: EchoResponse) => {
          resolve(message)
        },
        onEnd: (code) => {
        }
      })
    }).then(res => {
      console.log('EchoService.Echo', res.getMessage())
      this.echoRes = res.getMessage()
    })
  }

  streamingEcho(message: string, count: number, interval: number) {
    const request = new ServerStreamingEchoRequest()
    request.setMessage(message)
    request.setMessageCount(count)
    request.setMessageInterval(interval)
    const client = grpc.invoke(EchoService.ServerStreamingEcho, {
      debug: true,
      request,
      host,
      onMessage: (message: ServerStreamingEchoResponse) => {
        console.log('EchoService.ServerStreamingEcho', message.getMessage())
      },
      onEnd: (code) => {
      }
    })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
