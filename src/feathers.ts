import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import authentication from '@feathersjs/authentication-client'
import { createClient } from 'simpl-api'


// export const apiPath = 'http://localhost:3030'
export const apiPath = 'https://api.simpl.preyai.ru'

const connection = socketio(io(apiPath))

const client = createClient(connection)

client.configure(authentication())

export default client