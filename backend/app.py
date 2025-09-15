from flask import Flask
from flask_cors import CORS
from routes.comingsoon import comingsoon_bp
from routes.contact import contact_bp
from routes.events import events_bp
from routes.team import team_bp

app = Flask(__name__)
CORS(app)


app.register_blueprint(comingsoon_bp, url_prefix="/api")
app.register_blueprint(contact_bp, url_prefix="/api")
app.register_blueprint(events_bp, url_prefix="/api")
app.register_blueprint(team_bp, url_prefix="/api")


@app.route("/")
def home():
    return "Yoo wsg mate"

if __name__=="__main__":
    app.run(debug=True)