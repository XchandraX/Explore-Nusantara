import pandas as pd
import json

try:
    df = pd.read_csv("https://docs.google.com/spreadsheets/d/1vQ3QfVdNbHmUBa4kQFGa-P9kNp9-SGXJU3tBmzW0OAc/export?format=csv&id=1vQ3QfVdNbHmUBa4kQFGa-P9kNp9-SGXJU3tBmzW0OAc")

    selected_columns = ['place_id', 'place_name', 'category', 'city', 'rating', 'place_img']

    df_sample = df[selected_columns].head(6)

    places = df_sample.to_dict(orient="records")
    print(json.dumps(places, indent=4))

except Exception as e:
    print(f"Terjadi kesalahan: {e}")

