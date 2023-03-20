import os
from flask import Flask, request
from github import Github

app = Flask(__name__)
clicks = 0
@app.route('/save-value', methods=['POST'])
def save_value():
    value = request.form['value']
    if value:
        clicks += 1
    return clicks

if __name__ == '__main__':
    app.run()
