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
        <h2>EchoSerivce.Echo</h2>
        Request: <input type="text" placeholder="message" v-model="echoReq"><br> Result:
        <span>{{echoRes}}</span><br>
        <button @click="echo(echoReq)">echo</button>
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
} from './proto/echo_pb'

const host = 'http://localhost:8080'

@Component
export default class App extends Vue {
  echoReq = ""
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
