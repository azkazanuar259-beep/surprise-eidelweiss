
from flask import Flask, render_template
app = Flask(__name__)

PHOTOS = [{'src': '/static/photos/eidelweiss_01.jpg', 'alt': 'Foto kenangan 1'}, {'src': '/static/photos/eidelweiss_02.jpg', 'alt': 'Foto kenangan 2'}, {'src': '/static/photos/eidelweiss_03.jpg', 'alt': 'Foto kenangan 3'}, {'src': '/static/photos/eidelweiss_04.jpg', 'alt': 'Foto kenangan 4'}, {'src': '/static/photos/eidelweiss_05.jpg', 'alt': 'Foto kenangan 5'}, {'src': '/static/photos/eidelweiss_06.jpg', 'alt': 'Foto kenangan 6'}, {'src': '/static/photos/eidelweiss_07.jpg', 'alt': 'Foto kenangan 7'}, {'src': '/static/photos/eidelweiss_08.jpg', 'alt': 'Foto kenangan 8'}, {'src': '/static/photos/eidelweiss_09.jpg', 'alt': 'Foto kenangan 9'}, {'src': '/static/photos/eidelweiss_10.jpg', 'alt': 'Foto kenangan 10'}, {'src': '/static/photos/eidelweiss_11.jpg', 'alt': 'Foto kenangan 11'}, {'src': '/static/photos/eidelweiss_12.jpg', 'alt': 'Foto kenangan 12'}, {'src': '/static/photos/eidelweiss_13.jpg', 'alt': 'Foto kenangan 13'}, {'src': '/static/photos/eidelweiss_14.jpg', 'alt': 'Foto kenangan 14'}]

@app.route("/")
def home():
    return render_template("index.html", photos=PHOTOS)

if __name__ == "__main__":
    app.run(debug=True)
