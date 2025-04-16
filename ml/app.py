import pandas as pd
from flask import Flask, request, jsonify
import pickle
import random

with open('recommendation_model.pkl', 'rb') as f:
    similarity_matrix, vectorizer, le_category, le_city, scaler, df = pickle.load(f)

def combine_images(row):
    images = [row['place_img'], row['gallery_photo_img1'], row['gallery_photo_img2'], row['gallery_photo_img3']]
    return [img for img in images if pd.notnull(img)]

df['all_images'] = df.apply(combine_images, axis=1)

app = Flask(__name__)

def get_recommendations(place_index, similarity_matrix, df, top_n=5):
    if place_index < 0 or place_index >= similarity_matrix.shape[0]:
        raise ValueError("Invalid place index.")
    similarity_scores = list(enumerate(similarity_matrix[place_index].toarray().flatten()))
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)[1:top_n+1]
    recommended_indices = [i[0] for i in similarity_scores]
    return recommended_indices

@app.route('/get-recommendation', methods=['GET'])
def recommend():
    try:
        place_index = int(request.args.get('place_index', 0))
        top_n = int(request.args.get('top_n', 5))
        recommended_indices = get_recommendations(place_index, similarity_matrix, df, top_n)
        recommended_places = df.iloc[recommended_indices]

        results = []
        for _, row in recommended_places.iterrows():
            place_dict = row.to_dict()
            for key in ['place_img', 'gallery_photo_img1', 'gallery_photo_img2', 'gallery_photo_img3']:
                place_dict.pop(key, None)
            results.append(place_dict)

        return jsonify({"recommendations": results})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/get-place/<int:place_index>', methods=['GET'])
def get_place(place_index):
    try:
        if place_index < 0 or place_index >= len(df):
            return jsonify({"error": "Invalid place index."}), 400

        place_data = df.iloc[place_index].to_dict()
        for key in ['place_img', 'gallery_photo_img1', 'gallery_photo_img2', 'gallery_photo_img3']:
            place_data.pop(key, None)

        return jsonify({"place": place_data})
    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500
    
@app.route('/get-random-place', methods=['GET'])
def get_random_place():
    try:
        total_places = len(df)
        if total_places == 0:
            return jsonify({"error": "No places available."}), 404

        random_indices = random.sample(range(total_places), min(6, total_places))
        random_places = df.iloc[random_indices].copy()

        random_places["all_images"] = random_places.apply(lambda row: [row["place_img"]] +
                                                          [img for img in [row.get("gallery_photo_img1"),
                                                                           row.get("gallery_photo_img2"),
                                                                           row.get("gallery_photo_img3")]
                                                           if isinstance(img, str) and img.strip()], axis=1)

        results = []
        for idx, row in random_places.iterrows():
            place = row.to_dict()
            place["place_index"] = idx  
            place["place_img"] = place["all_images"] 
            del place["all_images"]
            for k in ["gallery_photo_img1", "gallery_photo_img2", "gallery_photo_img3"]:
                place.pop(k, None)
            results.append(place)

        return jsonify({"random_places": results})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500
        

if __name__ == '__main__':
    app.run(debug=True)
