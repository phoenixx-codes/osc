from flask import Blueprint, jsonify

events_bp = Blueprint("events", __name__)

# dummy later mongo we'll add 
events_data = {
    "2023":{
        "Event1":[
            {
                "url":"#",
                "image":"https://www.oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg",
                "title":"Cyber Syndicate",
                "sub_title":"Capture The Flag",
                "venue":"AB1-G03,04",
                "date":"21 Jan",
                "data":"Cyberpunk",
                "attandance":"5 Teams"

            }
        ]
    },
    "2022":{
        "Event1":[
            {
                "url":"#",
                "image":"https://i.ibb.co/7CSS8gg/Place-Holder-black.png",
                "title":"Getting Started with Networking",
                "sub_title":"Workshop",
                "venue":"Online",
                "date":"9 June",
                "data":"Cyberpunk",
                "attandance":"40"

            }
        ]
    }
}

@events_bp.route("/events", methods=["GET"])
def get_events():
    return jsonify(events_data)
