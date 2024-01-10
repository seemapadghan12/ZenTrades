import requests

# Fetch JSON data from the API
url = "https://s3.amazonaws.com/open-to-cors/assignment.json"
response = requests.get(url)
data = response.json()

# Extract relevant information from each product
products = []
for product in data:
    subcategory = product.get("Subcategory", "")
    title = product.get("Title", "")
    price = product.get("Price", 0.0)
    popularity = product.get("Popularity", 0)

    products.append({
        "subcategory": subcategory,
        "title": title,
        "price": price,
        "popularity": popularity
    })

# Sort products based on descending popularity
sorted_products = sorted(products, key=lambda x: x["popularity"], reverse=True)

# Display the sorted products
for idx, product in enumerate(sorted_products, start=1):
    print(f"{idx}. Title: {product['title']}, Price: {product['price']}, Popularity: {product['popularity']}")

# Note: This is a console-based display. For a web-based presentation, you can use frameworks like Flask or Django.
