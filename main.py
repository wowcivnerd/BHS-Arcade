from flask import Flask, render_template
import os


app = Flask(__name__)


@app.route("/test")
def test():
    return render_template("js-test.html")

@app.route("/")
def index():
    # games_folder = os.path.join('static', 'games')
    # game_files = os.listdir(games_folder)
    # game_name = 
    # game_location = 

        # games_folder = os.path.join('static', 'games')
        # game_files = [os.path.join(games_folder, file) for file in os.listdir(games_folder)]
        # return render_template('index.html', game_files=game_files)

    games_folder = os.path.join('static', 'games')
    game_files = [(os.path.join(games_folder, file), os.path.basename(file)) for file in os.listdir(games_folder)]
    return render_template('index.html', game_files=game_files)

    


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8008,debug=True)