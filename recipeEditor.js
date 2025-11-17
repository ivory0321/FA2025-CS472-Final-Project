/**
 * Loads a recipe by its ID and populates the form fields
 * @param {number} id - The recipe ID to load
 */
function loadRecipe(id) {
  const curRecipe = getRecipeById(id);
  if (!curRecipe) return;

  // Load title
  document.getElementById("recipe-title-value").value = curRecipe.title || "";

  // Load cover image
  if (curRecipe.coverImage) {
    document.getElementById("recipe-cover-img").src = curRecipe.coverImage;
  }

  // Load rating
  loadRatingToHTML(curRecipe);

  // Load tags
  loadTagsToHTML(curRecipe);

  // Load cookTime
  document.getElementById("prep-time-value").value = curRecipe.prepTime || "";

  // Load prepareTime
  document.getElementById("cook-time-value").value = curRecipe.cookTime || "";

  // Load description
  document.getElementById("recipe-description-value").value =
    curRecipe.description || "";

  // Load ingredients
  loadIngredientsToHTML(curRecipe);

  // Load instructions
  loadInstructionsToHTML(curRecipe);
}

/**
 * Saves the current recipe form data to localStorage
 * @param {number} id - The recipe ID to save
 */
const saveRecipe = (id) => {
  const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");

  const recipe = {
    id: id,
    coverImage: document.getElementById("recipe-cover-img").src,
    title: document.getElementById("recipe-title-value").value,
    foodName: document.getElementById("recipe-title-value").value, // Assuming foodName is same as title
    description: document.getElementById("recipe-description-value").value,
    prepTime: parseInt(document.getElementById("prep-time-value").value) || 0,
    cookTime: parseInt(document.getElementById("cook-time-value").value) || 0,
    servings: 0, // Not in form, defaulting to 0
    ingredients: [],
    instructions: [],
    rating:
      parseInt(document.querySelector('input[name="rating"]:checked')?.value) ||
      0,
    tags: [],
  };

  // Get ingredients
  const ingredientsContainer = document.getElementById("recipe-ingredients");
  const ingredientDivs = ingredientsContainer.querySelectorAll(
    ":scope > div:not(#adding-ingredient-btn)"
  );
  ingredientDivs.forEach((div) => {
    const inputs = div.querySelectorAll("input");
    if (inputs.length >= 3) {
      const ingredient = {
        name: inputs[0].value,
        quantity: parseInt(inputs[1].value) || 0,
        unit: inputs[2].value,
      };
      recipe.ingredients.push(ingredient);
    }
  });

  // Get instructions
  const instructionsContainer = document.getElementById("recipe-instructions");
  const instructionDivs = instructionsContainer.querySelectorAll(
    ":scope > div:not(#adding-instruction-btn)"
  );
  instructionDivs.forEach((div) => {
    const textarea = div.querySelector("textarea");
    if (textarea) {
      recipe.instructions.push(textarea.value);
    }
  });

  // Get tags
  const tagsContainer = document.getElementById("recipe-tags");
  const tagDivs = tagsContainer.querySelectorAll(
    ":scope > div:not(#adding-tag-btn)"
  );
  tagDivs.forEach((div) => {
    const input = div.querySelector("input");
    if (input) {
      recipe.tags.push(input.value);
    }
  });

  // Update or add recipe in localStorage
  const existingIndex = recipes.findIndex((r) => r.id === id);
  if (existingIndex !== -1) {
    recipes[existingIndex] = recipe;
  } else {
    recipes.push(recipe);
  }

  localStorage.setItem("recipes", JSON.stringify(recipes));
};

/**
 * Adds a new ingredient item to the form at the end of the list
 * @param {Event} e - The click event
 */
const addIngredientItem = (e) => {
  const ingredientsContainer = document.getElementById("recipe-ingredients");
  const ingredientDiv = document.createElement("div");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Ingredient name";
  ingredientDiv.appendChild(nameInput);

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = "0";
  ingredientDiv.appendChild(quantityInput);

  const unitInput = document.createElement("input");
  unitInput.type = "text";
  unitInput.placeholder = "Unit";
  ingredientDiv.appendChild(unitInput);

  const deleteBtn = document.createElement("div");
  deleteBtn.id = "delete-instruction-btn";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = deleteListItem;
  ingredientDiv.appendChild(deleteBtn);

  ingredientsContainer.appendChild(addingBtn);
};

/**
 * Adds a new instruction item to the form at the end of the list
 * @param {Event} e - The click event
 */
const addInstructionItem = (e) => {
  const instructionsContainer = document.getElementById("recipe-instructions");
  const instructionDiv = document.createElement("div");

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Instruction step";
  instructionDiv.appendChild(textarea);

  const deleteBtn = document.createElement("div");
  deleteBtn.id = "delete-instruction-btn";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = deleteListItem;
  instructionDiv.appendChild(deleteBtn);

  instructionsContainer.appendChild(instructionDiv);
};

/**
 * Deletes a list item (ingredient, instruction, or tag) from the form
 * @param {Event} e - The click event
 */
const deleteListItem = (e) => {
  const itemDiv = e.target.parentElement;
  itemDiv.remove();
};

/**
 * Retrieves a recipe by its ID from localStorage
 * @param {number} id - The recipe ID to retrieve
 * @returns {Object|undefined} The recipe object if found, otherwise undefined
 */
function getRecipeById(id) {
  const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
  const recipe = storedRecipes.find((recipe) => recipe.id === id);
  return recipe;
}

/**
 * Loads rating to the HTML form
 * @param {Object} curRecipe - The current recipe object
 */
function loadRatingToHTML(curRecipe) {
  const ratingInput = document.querySelector(
    `input[name="rating"][value="${curRecipe.rating || 0}"]`
  );
  if (ratingInput) {
    ratingInput.checked = true;
  }
}

/**
 * Loads tags to the HTML form
 * @param {Object} curRecipe - The current recipe object
 */
function loadTagsToHTML(curRecipe) {
  const tagsContainer = document.getElementById("recipe-tags");
  const addingTagBtn = document.getElementById("adding-tag-btn");
  tagsContainer.innerHTML = "";
  tagsContainer.appendChild(addingTagBtn);

  if (curRecipe.tags && Array.isArray(curRecipe.tags)) {
    curRecipe.tags.forEach((tag) => {
      const tagDiv = document.createElement("div");

      const tagInput = document.createElement("input");
      tagInput.type = "text";
      tagInput.value = tag;
      tagDiv.appendChild(tagInput);

      const deleteBtn = document.createElement("div");
      deleteBtn.id = "delete-instruction-btn";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = deleteListItem;
      tagDiv.appendChild(deleteBtn);

      tagsContainer.appendChild(tagDiv);
    });
  }
}

/**
 * Loads ingredients to the HTML form
 * @param {Object} curRecipe - The current recipe object
 */
function loadIngredientsToHTML(curRecipe) {
  const ingredientsContainer = document.getElementById("recipe-ingredients");
  const addingIngredientBtn = document.getElementById("adding-ingredient-btn");
  ingredientsContainer.innerHTML = "";
  ingredientsContainer.appendChild(addingIngredientBtn);
  curRecipe.ingredients.forEach((ingredient) => {
    const ingredientDiv = document.createElement("div");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = ingredient.name || "";
    nameInput.placeholder = "Ingredient name";
    ingredientDiv.appendChild(nameInput);

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = ingredient.quantity || 0;
    quantityInput.min = "0";
    ingredientDiv.appendChild(quantityInput);

    const unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.value = ingredient.unit || "";
    unitInput.placeholder = "Unit";
    ingredientDiv.appendChild(unitInput);

    const deleteBtn = document.createElement("div");
    deleteBtn.id = "delete-instruction-btn";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = deleteListItem;
    ingredientDiv.appendChild(deleteBtn);

    ingredientsContainer.appendChild(ingredientDiv);
  });
}

/**
 * Loads instructions to the HTML form
 * @param {Object} curRecipe - The current recipe object
 */
function loadInstructionsToHTML(curRecipe) {
  const instructionsContainer = document.getElementById("recipe-instructions");
  const addingInstructionBtn = document.getElementById(
    "adding-instruction-btn"
  );
  instructionsContainer.innerHTML = "";
  instructionsContainer.appendChild(addingInstructionBtn);
  curRecipe.instructions.forEach((instruction) => {
    const instructionDiv = document.createElement("div");

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Instruction step";
    textarea.textContent = instruction || "";
    instructionDiv.appendChild(textarea);

    const deleteBtn = document.createElement("div");
    deleteBtn.id = "delete-instruction-btn";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = deleteListItem;
    instructionDiv.appendChild(deleteBtn);

    instructionsContainer.appendChild(instructionDiv);
  });
}
