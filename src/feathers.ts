import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import rest from '@feathersjs/rest-client'
import authentication from '@feathersjs/authentication-client'
import { createClient } from 'simpl-api'


export const apiPath = 'http://localhost:3030'
// export const apiPath = 'https://api.simpl.preyai.ru'

const restConnection = rest(apiPath).fetch(window.fetch.bind(window))

const restApi = createClient(restConnection)

restApi.configure(authentication())

const socketioConnection = socketio(io(apiPath))

const socketioApi = createClient(socketioConnection)

socketioApi.configure(authentication())


export { restApi, socketioApi }