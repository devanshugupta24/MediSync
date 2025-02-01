from flask import Flask, request, jsonify
import os
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to access this backend

# Load the trained ML models
model_diabetes = joblib.load("trained_model.sav")
model_heart = joblib.load("trained_model_heart.sav")

@app.route("/")
def home():
    return "Flask server is running!"

@app.route("/predict-diabetes", methods=["POST"])
def predict_diabetes():
    try:
        data = request.get_json()
        features = np.array(data["features"]).reshape(1, -1)
        prediction = model_diabetes.predict(features).tolist()
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/predict-heart", methods=["POST"])
def predict_heart():
    try:
        data = request.get_json()
        features = np.array(data["features"]).reshape(1, -1)
        prediction = model_heart.predict(features).tolist()
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # Default to 10000 if PORT is not set
    app.run(host="0.0.0.0", port=port)
