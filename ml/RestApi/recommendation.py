import pandas as pd
import json
import sys
from sklearn.metrics.pairwise import cosine_similarity
import scipy.sparse as sp
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder, StandardScaler

df = pd.read_csv("https://docs.google.com/spreadsheets/d/1vQ3QfVdNbHmUBa4kQFGa-P9kNp9-SGXJU3tBmzW0OAc/export?format=csv&id=1vQ3QfVdNbHmUBa4kQFGa-P9kNp9-SGXJU3tBmzW0OAc")

df['place_description'] = df['place_description'].fillna('')
df['description_location'] = df['description_location'].fillna('')
df['category'] = df['category'].fillna(df['category'].mode()[0])
df['city'] = df['city'].fillna(df['city'].mode()[0])
df['rating'] = df['rating'].fillna(df['rating'].median())

df['combined_text'] = df['place_description'] + " " + df['description_location']

vectorizer = TfidfVectorizer(max_features=1000, stop_words=['yang', 'dan', 'di', 'ke', 'dari', 'ini', 'itu'])
tfidf_matrix = vectorizer.fit_transform(df['combined_text'])

le_category = LabelEncoder()
df['category_encoded'] = le_category.fit_transform(df['category'])

le_city = LabelEncoder()
df['city_encoded'] = le_city.fit_transform(df['city'])

scaler = StandardScaler()
df[['rating_scaled']] = scaler.fit_transform(df[['rating']])

other_features = df[['category_encoded', 'city_encoded', 'rating_scaled']]
other_features_sparse = sp.csr_matrix(other_features.values)
final_feature_matrix = sp.hstack([tfidf_matrix, other_features_sparse])

similarity_matrix = cosine_similarity(final_feature_matrix, dense_output=False)

def get_recommendations(place_index, top_n=5):
    similarity_scores = list(enumerate(similarity_matrix[place_index].toarray().flatten()))
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)[1:top_n+1]
    recommended_indices = [i[0] for i in similarity_scores]
    return recommended_indices

try:
    place_id = int(sys.argv[1]) if len(sys.argv) > 1 else -1
    place_index = df[df['place_id'] == place_id].index[0]
    recommended_indices = get_recommendations(place_index)
    recommended_places = df.iloc[recommended_indices]
    
    result = recommended_places[['place_id', 'place_name', 'category', 'city', 'rating']].to_dict(orient="records")
    print(json.dumps(result))
except:
    print(json.dumps([])) 
