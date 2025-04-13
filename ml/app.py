from flask import Flask, request, jsonify
import pickle

with open('recommendation_model.pkl', 'rb') as f:
    similarity_matrix, vectorizer, le_category, le_city, scaler, df = pickle.load(f)

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

        results = recommended_places.to_dict(orient='records')

        return jsonify({"recommendations": results})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/get-place/<int:place_index>', methods=['GET'])
def get_place(place_index):
    try:
        if place_index < 0 or place_index >= len(df):
            return jsonify({"error": "Invalid place index."}), 400

        place_data = df.iloc[place_index].to_dict()
        return jsonify({"place": place_data})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)