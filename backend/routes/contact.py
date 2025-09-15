from flask import Blueprint, jsonify

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/contact", methods=["GET"])
def get_contact():
    return jsonify({
        "email": "oscvitap@gmail.com",
        "instagram": "https://instagram.com/oscvitap",
        "github": "https://github.com/OSCVITAP",
        "linkedin": "https://linkedin.com/company/oscvitap"
    })
