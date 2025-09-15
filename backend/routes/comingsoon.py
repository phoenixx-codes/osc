from flask import Blueprint, jsonify

comingsoon_bp=Blueprint("comingsoon",__name__)

@comingsoon_bp.route("/comingsoon",methods=["GET"])
def comingsoon():
    return jsonify({"message": "Coming Soon!"})