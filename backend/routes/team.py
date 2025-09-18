from flask import Flask,Blueprint,jsonify,request
from mongoDB import mongo

team_bp=Blueprint("team",__name__)

#fetch all teams
@team_bp.route("/team",methods=["GET"])
def get_team():
    teams = mongo.db.teams.find({})
    team_list = {}

    #group the data by year
    for team in teams:
        year = team.get("year")
        category = team.get("category")
        member = {
            "title": team.get("title"),
            "disc": team.get("disc"),
            "image": team.get("image"),
            "link": team.get("link")
        }

        if year not in team_list:
            team_list[year] = {}

        if category not in team_list[year]:
            team_list[year][category] = []

        team_list[year][category].append(member)

    return jsonify(team_list)



#add a new member
@team_bp.route("/team", methods=["POST"])
def add_team_member():
    data = request.get_json()

    required_fields = ["year", "category", "title", "disc", "image", "link"]
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    result = mongo.db.teams.insert_one({
        "year": data["year"],
        "category": data["category"],
        "title": data["title"],
        "disc": data["disc"],
        "image": data["image"],
        "link": data["link"]
    })

    return jsonify({"message": "Team member added", "Title": data["title"]}), 201


