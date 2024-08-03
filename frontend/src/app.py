from flask import Flask, request, jsonify
from flask_cors import CORS
import fireworks.client
import json
import traceback

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

fireworks.client.api_key = "mgTv084Jswhe9gbTzBZ3PTXuZKZA274HVGECe1iwWBvcgWpK"

def get_completion(prompt, model=None, max_tokens=50):
    fw_model_dir = "accounts/fireworks/models/"

    if model is None:
        model = fw_model_dir + "llama-v2-7b"
    else:
        model = fw_model_dir + model

    completion = fireworks.client.Completion.create(
        model=model,
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=0
    )
    return completion.choices[0].text

def generate_recipes(ingredients):
    prompt = f"""[INST]
    Given the following ingredients, write 5 different recipes using these ingredients. For each recipe, provide the following information in the JSON format:

    - `recipe`: The name of the recipe.
    - `ingredients`: A list of ingredients used in the recipe.
    - `steps`: A list of steps to prepare the recipe.

    Ensure that each recipe is clearly separated, and use the format provided below:

    const recipes = [
      {{
        recipe: "Recipe Name",
        ingredients: [
          "Ingredient 1",
          "Ingredient 2",
          ...
        ],
        steps: {{
          "Step 1": "Description of step 1",
          "Step 2": "Description of step 2",
          ...
        }}
      }},
      ...
    ]

    {ingredients}

    Use only the ingredients provided in the JSON object above.
    [/INST]"""

    mistral_llm = "mistral-7b-instruct-4k"
    response = get_completion(prompt, model=mistral_llm, max_tokens=10000)

    return response

@app.route('/')
def index():
    return "Welcome to the Smart Recipe API. Use the /generate-recipes endpoint to get recipes."

@app.route('/generate-recipes', methods=['POST'])
def generate_recipes_endpoint():
    if request.content_type != 'application/json':
        return jsonify({"error": "Unsupported Media Type"}), 415

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Failed to decode JSON object"}), 400

        ingredients = data.get('ingredients', {})

        if not ingredients:
            return jsonify({"error": "No ingredients provided"}), 400

        ingredients_json = json.dumps(ingredients)

        raw_recipes = generate_recipes(ingredients_json)

        try:
            recipes = json.loads(raw_recipes)
        except json.JSONDecodeError:
            return jsonify({"error": "Failed to parse recipes"}), 500

        return jsonify({"recipes": recipes})

    except Exception as e:
        print(f"Error: {e}")
        print(traceback.format_exc())
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
