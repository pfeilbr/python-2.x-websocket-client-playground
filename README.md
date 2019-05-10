# python-2.x-websocket-client-playground

learn python [websocket-client](https://github.com/websocket-client/websocket-client) module

## prerequisites

- python 2.x
- node.js: for local websocket server. code is from https://glitch.com/~socketio-basic.  uses [ws: a Node.js WebSocket library](https://github.com/websockets/ws)
- virtualenv: `pip install virtualenv` or `sudo pip install virtualenv`

## running

```sh
# server (node.js) - run in own terminal (blocking)
cd src/server
npm i
npm start

# client - run in separate terminal
cd src/client
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python client.py
```