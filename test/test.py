import os
from flask import Flask, request
from github import Github

app = Flask(__name__)

@app.route('/save-value', methods=['POST'])
def save_value():
    value = request.form['value']
    # authenticate to GitHub using an access token
    g = Github("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")
    # find the repository
    repo = g.get_repo("theRealDadsdy/theRealDadsdy.github.io");
    #create or get the file
    file_name = "file.txt"
    file_content = value
    try:
        file_path = f"path/to/{file_name}"
        file_sha = repo.get_contents(file_path).sha
        repo.update_file(file_path, "updated file", file_content, file_sha)
    except:
        repo.create_file(file_path, "created file", file_content)
    return 'success'

if __name__ == '__main__':
    app.run()
