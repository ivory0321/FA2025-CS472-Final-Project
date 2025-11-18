// recipeEditor.js
// This file controls the behavior of the Recipe Editor page.
// It uses global objects from localData.js, recipe.js, sessionData.js.

// Use an IIFE to avoid polluting the global scope too much
(function () {
  // Keys used in localStorage
  var LOCAL_DATA_KEY = 'localData';
  var SESSION_DATA_KEY = 'sessionData';

  // Will store the recipe we are editing (if any)
  var editingRecipe = null;

  // ======= Data loading / saving helpers =======

  // Load localData from localStorage and merge into global localData object
  function loadLocalData() {
    var stored = localStorage.getItem(LOCAL_DATA_KEY);
    if (stored) {
      try {
        var parsed = JSON.parse(stored);
        // Merge parsed data into the existing localData object
        Object.assign(localData, parsed);
      } catch (e) {
        console.error('Failed to parse localData from storage:', e);
      }
    }

    // Make sure localData.recipes is at least an empty array
    if (!Array.isArray(localData.recipes)) {
      localData.recipes = [];
    }
  }

  // Save current localData to localStorage
  function saveLocalData() {
    localStorage.setItem(LOCAL_DATA_KEY, JSON.stringify(localData));
  }

  // Load sessionData from localStorage and merge into global sessionData object
  function loadSessionData() {
    var stored = localStorage.getItem(SESSION_DATA_KEY);
    if (stored) {
      try {
        var parsed = JSON.parse(stored);
        Object.assign(sessionData, parsed);
      } catch (e) {
        console.error('Failed to parse sessionData from storage:', e);
      }
    }
  }

  // Save sessionData to localStorage
  function saveSessionData() {
    localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(sessionData));
  }

  // Simple helper to generate a new numeric id for a recipe
  // It finds the maximum existing id and adds 1.
  function getNewRecipeId() {
    var maxId = 0;
    for (var i = 0; i < localData.recipes.length; i++) {
      var r = localData.recipes[i];
      if (typeof r.id === 'number' && r.id > maxId) {
        maxId = r.id;
      }
    }
    return maxId + 1;
  }

  // ======= DOM Initialization =======

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // Load data from storage first
    loadLocalData();
    loadSessionData();

    // Try to find which recipe we are editing
    if (sessionData.currRecipe != null) {
      var idToEdit = sessionData.currRecipe;
      editingRecipe = localData.recipes.find(function (r) {
        return r.id === idToEdit;
      });
    }

    // Set page title depending on mode
    var h1 = document.querySelector('h1');
    if (editingRecipe) {
      h1.textContent = 'Recipe Editor - Edit Recipe';
      fillForm(editingRecipe);
    } else {
      h1.textContent = 'Recipe Editor - New Recipe';
      // For new recipe, we can start with one empty ingredient and one empty step
      addIngredientRow();
      addStepField();
    }

    // Attach event listeners for buttons and form
    var addIngBtn = document.getElementById('add-ingredient');
    if (addIngBtn) {
      addIngBtn.addEventListener('click', function () {
        addIngredientRow();
      });
    }

    var addStepBtn = document.getElementById('add-step');
    if (addStepBtn) {
      addStepBtn.addEventListener('click', function () {
        addStepField();
      });
    }

    var form = document.getElementById('recipe-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  }

  // ======= Fill form when editing =======

  // Put existing recipe data into all form fields
  function fillForm(r) {
    // Basic fields
    document.getElementById('coverImage').value = r.coverImage || '';
    document.getElementById('title').value = r.title || '';
    document.getElementById('foodName').value = r.foodName || '';
    document.getElementById('description').value = r.description || '';
    document.getElementById('prepTime').value =
      r.prepTime !== undefined ? r.prepTime : '';
    document.getElementById('cookTime').value =
      r.cookTime !== undefined ? r.cookTime : '';
    document.getElementById('servings').value =
      r.servings !== undefined ? r.servings : '';

    // Ingredients
    var ingBody = document.getElementById('ingredients-body');
    ingBody.innerHTML = ''; // clear any existing rows
    if (Array.isArray(r.ingredients) && r.ingredients.length > 0) {
      r.ingredients.forEach(function (ing) {
        addIngredientRow(ing);
      });
    } else {
      // if no ingredients in data, start with one empty row
      addIngredientRow();
    }

    // Instructions
    var stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = '';
    if (Array.isArray(r.instructions) && r.instructions.length > 0) {
      r.instructions.forEach(function (text) {
        addStepField(text);
      });
    } else {
      addStepField();
    }
  }

  // ======= Ingredient row handling =======

  // Add a new ingredient row to the table.
  // If ingredientData is provided, fill in its values.
  function addIngredientRow(ingredientData) {
    var tbody = document.getElementById('ingredients-body');
    var tr = document.createElement('tr');
    tr.className = 'ingredient-row';

    // Create cells
    var tdName = document.createElement('td');
    var tdQty = document.createElement('td');
    var tdUnit = document.createElement('td');
    var tdRemove = document.createElement('td');

    // Create inputs
    var inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.className = 'ing-name';
    inputName.value = ingredientData && ingredientData.name ? ingredientData.name : '';

    var inputQty = document.createElement('input');
    inputQty.type = 'number';
    inputQty.className = 'ing-qty';
    inputQty.min = '0';
    inputQty.step = '0.01';
    inputQty.value =
      ingredientData && ingredientData.quantity !== undefined
        ? ingredientData.quantity
        : '';

    var inputUnit = document.createElement('input');
    inputUnit.type = 'text';
    inputUnit.className = 'ing-unit';
    inputUnit.value = ingredientData && ingredientData.unit ? ingredientData.unit : '';

    // Remove button for this row
    var btnRemove = document.createElement('button');
    btnRemove.type = 'button';
    btnRemove.textContent = 'X';
    btnRemove.className = 'remove-ingredient';
    btnRemove.addEventListener('click', function () {
      tbody.removeChild(tr);
    });

    // Append inputs into cells, and cells into the row
    tdName.appendChild(inputName);
    tdQty.appendChild(inputQty);
    tdUnit.appendChild(inputUnit);
    tdRemove.appendChild(btnRemove);

    tr.appendChild(tdName);
    tr.appendChild(tdQty);
    tr.appendChild(tdUnit);
    tr.appendChild(tdRemove);

    tbody.appendChild(tr);
  }

  // ======= Instructions handling =======

  // Add a new step (li with textarea)
  // If text is provided, fill it in.
  function addStepField(text) {
    var list = document.getElementById('steps-list');

    var li = document.createElement('li');
    li.className = 'step-item';

    var textarea = document.createElement('textarea');
    textarea.className = 'step-text';
    textarea.rows = 2;
    textarea.value = text || '';

    var btnRemove = document.createElement('button');
    btnRemove.type = 'button';
    btnRemove.textContent = 'X';
    btnRemove.className = 'remove-step';
    btnRemove.addEventListener('click', function () {
      list.removeChild(li);
    });

    li.appendChild(textarea);
    li.appendChild(btnRemove);

    list.appendChild(li);
  }

  // ======= Form submit handling =======

  // When user clicks "Save Recipe"
  function handleSubmit(event) {
    event.preventDefault(); // stop default form submission

    // 1. Read all basic fields
    var coverImage = document.getElementById('coverImage').value.trim();
    var title = document.getElementById('title').value.trim();
    var foodName = document.getElementById('foodName').value.trim();
    var description = document.getElementById('description').value.trim();
    var prepTimeStr = document.getElementById('prepTime').value;
    var cookTimeStr = document.getElementById('cookTime').value;
    var servingsStr = document.getElementById('servings').value;

    var prepTime = prepTimeStr === '' ? null : Number(prepTimeStr);
    var cookTime = cookTimeStr === '' ? null : Number(cookTimeStr);
    var servings = servingsStr === '' ? null : Number(servingsStr);

    // 2. Collect ingredients from table
    var ingredients = [];
    var rows = document.querySelectorAll('.ingredient-row');
    rows.forEach(function (row) {
      var name = row.querySelector('.ing-name').value.trim();
      var qtyStr = row.querySelector('.ing-qty').value;
      var unit = row.querySelector('.ing-unit').value.trim();

      // Skip ingredients with empty name
      if (name !== '') {
        ingredients.push({
          name: name,
          quantity: qtyStr === '' ? 0 : Number(qtyStr),
          unit: unit,
        });
      }
    });

    // 3. Collect instructions (steps)
    var instructions = [];
    var stepTextareas = document.querySelectorAll('.step-text');
    stepTextareas.forEach(function (ta) {
      var stepText = ta.value.trim();
      if (stepText !== '') {
        instructions.push(stepText);
      }
    });

    // 4. Basic validation (you can add more later)
    if (title === '') {
      alert('Title is required.');
      return;
    }

    // 5. Build a new recipe object
    var newRecipe = {
      id: editingRecipe ? editingRecipe.id : getNewRecipeId(),
      coverImage: coverImage,
      title: title,
      foodName: foodName,
      description: description,
      prepTime: prepTime,
      cookTime: cookTime,
      servings: servings,
      ingredients: ingredients,
      instructions: instructions,
    };

    // 6. Write back into localData.recipes
    if (editingRecipe) {
      // Replace the old recipe in the array
      var index = localData.recipes.findIndex(function (r) {
        return r.id === editingRecipe.id;
      });
      if (index !== -1) {
        localData.recipes[index] = newRecipe;
      }
    } else {
      // New recipe: push into array
      localData.recipes.push(newRecipe);
      // Also remember this as current recipe in sessionData
      sessionData.currRecipe = newRecipe.id;
      saveSessionData();
    }

    // 7. Save to localStorage
    saveLocalData();

    // 8. Redirect to Recipe Display page
    // You can change the URL if your file name is different.
    window.location.href = 'recipeDisplay.html';
  }
})();
