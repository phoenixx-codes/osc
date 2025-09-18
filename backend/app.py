from flask import Flask
from flask_cors import CORS
from routes.comingsoon import comingsoon_bp
from routes.contact import contact_bp
from routes.events import events_bp
from routes.team import team_bp

import os
from mongoDB import mongo
from dotenv import load_dotenv

load_dotenv()


def create_app():
    app = Flask(__name__)
    CORS(app)
 
    #get mongoDB url from .env
    app.config["MONGO_URI"] = os.getenv("MONGO_URI")

    #initialize PyMongo with the app
    mongo.init_app(app)

    from routes.comingsoon import comingsoon_bp
    from routes.contact import contact_bp
    from routes.events import events_bp
    from routes.team import team_bp

    app.register_blueprint(comingsoon_bp, url_prefix="/api")
    app.register_blueprint(contact_bp, url_prefix="/api")
    app.register_blueprint(events_bp, url_prefix="/api")
    app.register_blueprint(team_bp, url_prefix="/api")

    @app.route("/")
    def home():
        return "Yoo wsg mate"

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)