from flask import Flask, jsonify
from flask_cors import CORS
from time import sleep

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/accessLog')
def getAccessLog():
    return open('/var/log/nginx/access.log').read()
            
@app.route('/errorLog')
def getErrorLog():
    return open('/var/log/nginx/error.log').read()

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=1337)
