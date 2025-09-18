# OSC Website Backend

This is the backend for the OSC Website, built with **Flask** and **MongoDB**.  
It provides APIs for teams, events, contact, and coming soon sections, consumed by the React frontend.

---

## 📂 Project Structure

```
backend/
│── routes/           # All API route files
│   ├── ...
│── app.py            # Flask app entrypoint
│── mongoDB.py        # MongoDB initialization
│── requirements.txt  # Python dependencies
│── .env              # Environment variables (not committed)
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd backend
```

### 2. Create and activate a virtual environment

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 🌱 Environment Variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>
```

---

## ▶️ Running the Server

```bash
# Development mode
python app.py
```

By default, the server runs on:  
👉 `http://127.0.0.1:5000/`

---

## 📡 API Endpoints

- `GET /api/team` → Get all teams grouped by year and category
- `POST /api/team` → Add a new team member
- `GET /api/events` → Get all events
- `POST /api/contact` → Get contact info

---
