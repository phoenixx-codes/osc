from flask import Flask,Blueprint,jsonify

team_bp=Blueprint("team",__name__)

#later gotta swap the team data with mongo queries.
team_data={
    "2023": {
        "Tech": [
            {"title": "Backend Lead", "disc": "Handles APIs", "image": "/images/backend.png", "link": "https://github.com/user1"},
            {"title": "Frontend Lead", "disc": "UI/UX", "image": "/images/frontend.png", "link": "https://github.com/user2"}
        ],
        "Design": [
            {"title": "Designer", "disc": "Posters & UI Design", "image": "/images/design.png", "link": "https://github.com/user3"}
        ]
    },
    "2024": {
        "Tech": [
            {"title": "Backend Intern", "disc": "Helps backend team", "image": "/images/backend2.png", "link": "https://github.com/user4"}
        ]
    }
}

@team_bp.route("/team",methods=["GET","POST"])
def get_team():
    return jsonify(team_data)



