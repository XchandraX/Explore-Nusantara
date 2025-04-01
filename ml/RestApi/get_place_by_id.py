import pandas as pd
import json
import sys
import numpy as np

df = pd.read_csv("https://docs.google.com/spreadsheets/d/1vQ3QfVdNbHmUBa4kQFGa-P9kNp9-SGXJU3tBmzW0OAc/export?format=csv&id=1vQ3QfVdNbHmUBa4kQFGa-P9kNp9-SGXJU3tBmzW0OAc")

place_id = int(sys.argv[1]) if len(sys.argv) > 1 else -1

place = df[df['place_id'] == place_id]

if place.empty:
    print(json.dumps(None))
    sys.exit()

place = place.replace({np.nan: None})

result = place[['place_name', 'category', 'city', 'rating', 'place_description', 'place_img', 'gallery_photo_img1', 'gallery_photo_img2', 'gallery_photo_img3', 'place_map']].to_dict(orient="records")

print(json.dumps(result[0]))  