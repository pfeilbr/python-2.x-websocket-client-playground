# python-2.x-websocket-client-playground

## prerequisites

- python 2.x
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