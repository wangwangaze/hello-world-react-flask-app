from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/add/<num1>/<num2>', methods=['POST', 'GET', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def user(num1, num2):
    try:
        return {"answer": str(float(num1) + float(num2))}
    except:
        return {"answer": "Error: input must be numeric"}

if __name__ == '__main__':
    app.run(debug=True)