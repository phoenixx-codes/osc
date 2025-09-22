from flask import Flask, send_from_directory
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
    app = Flask(__name__,
                static_folder="../frontend/dist/",  # React static files
        template_folder="../frontend/dist"       # React index.html
    )
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

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_react(path):
        if path != "" and os.path.exists(os.path.join(app.template_folder, path)):
            return send_from_directory(app.template_folder, path)
        else:
            return send_from_directory(app.template_folder, "index.html")


    return app


if __name__ == "__main__":
    app = create_app()
    port = int(os.environ.get("PORT", 5000)) 
    app.run(host="0.0.0.0", port=port, debug=True)