const FS = {
    title: "root",
    type: "folder",
    children: [
        {
            title: "Recipes", type: "folder", children: [
                {
                    title: "Breakfast", type: "folder", children: [
                        {
                            id: 1,
                            coverImage: "./test_recipe.jpg",
                            title: "Recipe 1",
                            foodName: "Pasta",
                            description: "Delicious creamy pasta with garlic and parmesan",
                            prepTime: 10,
                            cookTime: 20,
                            rating: 4,
                            ingredients: [
                                {name: "pasta", quantity: 200, unit: "g"},
                                {name: "garlic", quantity: 3, unit: "cloves"},
                                {name: "heavy cream", quantity: 200, unit: "ml"},
                                {name: "parmesan", quantity: 50, unit: "g"},
                            ],
                            instructions: [
                                "Cook pasta according to package directions",
                                "Sauté garlic in butter",
                                "Add cream and parmesan",
                                "Mix with cooked pasta",
                            ],
                            tags: ["Italian", "Vegetarian", "Quick"],
                            servings: 1,
                        },
                        {
                            id: 2,
                            coverImage: "./rest_recipe.jpg",
                            title: "Recipe 2",
                            foodName: "Spicy Chicken Curry",
                            description: "A rich and spicy Indian-style chicken curry with coconut milk.",
                            prepTime: 15,
                            cookTime: 40,
                            rating: 5,
                            ingredients: [
                                {name: "chicken breast", quantity: 500, unit: "g"},
                                {name: "onion", quantity: 1, unit: "medium"},
                                {name: "curry powder", quantity: 2, unit: "tbsp"},
                                {name: "coconut milk", quantity: 400, unit: "ml"},
                                {name: "tomato paste", quantity: 1, unit: "tbsp"}
                            ],
                            instructions: [
                                "Dice chicken and chop onion.",
                                "Sauté onion until soft.",
                                "Add chicken and brown.",
                                "Stir in curry powder and tomato paste.",
                                "Pour in coconut milk and simmer for 30 minutes, or until chicken is cooked through."
                            ],
                            tags: ["Indian", "Spicy", "Dinner"],
                            servings: 4
                        },
                    ]
                },
                {
                    title: "Dinner", type: "folder", children: [
                        {
                            id: 3,
                            coverImage: "./rest_recipe.jpg",
                            title: "Recipe 3",
                            foodName: "Beef Tacos",
                            description: "Classic ground beef tacos with your favorite toppings.",
                            prepTime: 10,
                            cookTime: 15,
                            rating: 4,
                            ingredients: [
                                {name: "ground beef", quantity: 500, unit: "g"},
                                {name: "taco seasoning", quantity: 1, unit: "packet"},
                                {name: "water", quantity: 125, unit: "ml"},
                                {name: "taco shells", quantity: 12, unit: "count"}
                            ],
                            instructions: [
                                "Brown ground beef and drain excess fat.",
                                "Stir in taco seasoning and water.",
                                "Bring to a boil, then reduce heat and simmer for 10 minutes.",
                                "Spoon mixture into taco shells and serve with desired toppings."
                            ],
                            tags: ["Mexican", "Quick", "Dinner"],
                            servings: 6
                        },
                        {
                            id: 4,
                            coverImage: "./rest_recipe.jpg",
                            title: "Recipe 4",
                            foodName: "Mediterranean Quinoa Salad",
                            description: "A light and fresh salad with quinoa, cucumber, tomatoes, and feta cheese.",
                            prepTime: 15,
                            cookTime: 15,
                            rating: 5,
                            ingredients: [
                                {name: "quinoa", quantity: 150, unit: "g"},
                                {name: "cucumber", quantity: 1, unit: "count"},
                                {name: "cherry tomatoes", quantity: 200, unit: "g"},
                                {name: "feta cheese", quantity: 100, unit: "g"},
                                {name: "lemon juice", quantity: 2, unit: "tbsp"}
                            ],
                            instructions: [
                                "Cook quinoa according to package directions and let cool.",
                                "Dice cucumber and halve cherry tomatoes.",
                                "Combine quinoa, cucumber, tomatoes, and crumbled feta in a large bowl.",
                                "Drizzle with lemon juice and mix well."
                            ],
                            tags: ["Vegetarian", "Healthy", "Lunch"],
                            servings: 3
                        },
                    ]
                }
            ]
        },
        {
            id: 5,
            coverImage: "./rest_recipe.jpg",
            title: "Recipe 5",
            foodName: "Fluffy Pancakes",
            description: "Classic light and fluffy buttermilk pancakes.",
            prepTime: 5,
            cookTime: 15,
            rating: 4,
            ingredients: [
                {name: "flour", quantity: 250, unit: "g"},
                {name: "baking powder", quantity: 2, unit: "tsp"},
                {name: "sugar", quantity: 3, unit: "tbsp"},
                {name: "egg", quantity: 1, unit: "large"},
                {name: "buttermilk", quantity: 300, unit: "ml"}
            ],
            instructions: [
                "Whisk together flour, baking powder, and sugar.",
                "In a separate bowl, whisk the egg and buttermilk.",
                "Combine wet and dry ingredients, mixing until just combined (don't overmix).",
                "Pour 1/4 cup of batter onto a hot, buttered griddle for each pancake.",
                "Cook until bubbles appear on the surface, then flip and cook until golden brown."
            ],
            tags: ["Breakfast", "Sweet", "Quick"],
            servings: 4
        },
        {
            id: 6,
            coverImage: "./rest_recipe.jpg",
            title: "Recipe 6",
            foodName: "Lemon Herb Baked Salmon",
            description: "Simple and flavorful baked salmon with lemon and fresh herbs.",
            prepTime: 5,
            cookTime: 20,
            rating: 5,
            ingredients: [
                {name: "salmon fillets", quantity: 4, unit: "count"},
                {name: "lemon", quantity: 1, unit: "count"},
                {name: "olive oil", quantity: 2, unit: "tbsp"},
                {name: "fresh dill", quantity: 1, unit: "tbsp"},
                {name: "salt", quantity: 1, unit: "tsp"}
            ],
            instructions: [
                "Preheat oven to 400°F (200°C).",
                "Place salmon on a baking sheet.",
                "Drizzle with olive oil, sprinkle with salt and chopped dill.",
                "Slice lemon and place slices on top of each fillet.",
                "Bake for 15-20 minutes, or until cooked through."
            ],
            tags: ["Seafood", "Healthy", "Dinner"],
            servings: 4
        },
        {
            id: 7,
            coverImage: "./rest_recipe.jpg",
            title: "Recipe 7",
            foodName: "Tomato Basil Soup",
            description: "A classic, comforting, creamy tomato soup with fresh basil.",
            prepTime: 10,
            cookTime: 30,
            rating: 4,
            ingredients: [
                {name: "canned crushed tomatoes", quantity: 800, unit: "g"},
                {name: "vegetable broth", quantity: 500, unit: "ml"},
                {name: "onion", quantity: 0.5, unit: "medium"},
                {name: "fresh basil", quantity: 0.5, unit: "cup"},
                {name: "heavy cream", quantity: 50, unit: "ml"}
            ],
            instructions: [
                "Sauté chopped onion until soft.",
                "Add crushed tomatoes and vegetable broth; bring to a simmer.",
                "Stir in chopped fresh basil.",
                "Use an immersion blender to blend until smooth (optional).",
                "Stir in heavy cream and heat through before serving."
            ],
            tags: ["Vegetarian", "Comfort Food", "Soup"],
            servings: 4
        }
    ]
};


let currentPath = ["root"];
let currentNode = FS;
let selected = null;
const tree = document.getElementById("tree");
const view = document.getElementById("view");
const breadcrumb = document.getElementById("breadcrumb");
const pathInfo = document.getElementById("pathInfo");
const searchInput = document.getElementById("search");
const upBtn = document.getElementById("upBtn");


//Each file/ folder represented as node obj.


//array of active Nodes to be displayed
window._expanded = new Set(['root']);

/**
 *
 * @param {node}node current node to get a path
 * @returns {node[]} array of nodes
 * @description walk from the given node all the way up to the root and add name of each node in front of node array that represents a path
 */
function getPathOfNode(node) {
    const path = [];
    //iterate over given path searching in FS
    (function find(cur) {
        if (cur === node) {
            path.unshift(cur.title);
            return true;
        }
        if (cur.children) {
            for (const c of cur.children) {
                if (find(c)) {
                    path.unshift(cur.title);
                    return true;
                }
            }
        }
        return false;
    })(FS);
    return path;
}

/**
 *
 * @param {node[]}pathArr array of nodes from root
 * @returns {node|null} node object found from a file system
 * @description
 * take array of nodes as path and return node object if found.
 */

function findNodeByPath(pathArr) {
    let node = FS;
    for (let i = 1; i < pathArr.length; i++) {
        const name = pathArr[i];
        if (!node.children)
            return null;
        node = node.children.find(c => c.title === name);
        if (!node)
            return null;
    }
    return node;
}


/**
 *
 * @param node - node to get an ID in window._expanded
 * @returns {string} - full path in string
 * @description
 * @example
 * getNodeIDFromNode(['root', 'a', 'b']);
 * //Expected output: root/a/b
 */
function getNodeIDFromNode(node) {
    return getPathOfNode(node).join('/');
}

window.isExpanded = (node) => (window._expanded && window._expanded.has(getNodeIDFromNode(node)));
window.toggleNode = (node) => {
    const id = getNodeIDFromNode(node);
    //collapse
    if (window._expanded.has(id)) {
        window._expanded.delete(id);
    } else {
        //expand
        window._expanded.add(id);
    }
};


function displayTree() {
    tree.innerHTML = "";

    function walk(n, level) {
        const elem = document.createElement("div");
        elem.className = 'node ' + (currentPath.join('/') === getPathOfNode(n).join('/') ? ' active' : '');
        elem.style.paddingLeft = (8 + level * 12) + 'px';


        // collapsed or expanded
        const toggle = document.createElement("div");
        toggle.className = 'toggle';
        if (n.type === 'folder') {
            toggle.textContent = window.isExpanded(n) ? '▼' : '▶';
        }
        elem.appendChild(toggle);

        //choose icon
        const label = document.createElement("div");
        label.className = 'label';
        label.innerHTML = `<span style="width:18px; display: inline-block">${n.type === "folder" ? "📂" : "📄"}</span><span>${n.title}</span>`;
        elem.appendChild(label);

        elem.addEventListener("click", (e) => {
            e.stopPropagation();
            if (n.type === 'folder') {
                window.toggleNode(n);
                const path = getPathOfNode(n);
                currentPath = path;
                currentNode = findNodeByPath(path);
                displayAll();
            } else {
                selectItem(n)
            }
        });
        tree.appendChild(elem);
        if (n.type === 'folder' && window.isExpanded(n) && n.children) {
            n.children.forEach(c => {
                walk(c, level + 1)
            });
        }
    }

    walk(FS, 0);
}

function displayView() {
    view.innerHTML = "";
    const node = currentNode;
    const items = (node.children).slice();
    const q = (searchInput.value || '').toLowerCase();
    const filtered = items.filter(item => item.title.toLowerCase().includes(q));
    pathInfo.textContent = `${filtered.length} item(s) in ${currentPath.join(' / ')}`;

    filtered.forEach(item => {
        const col = document.createElement("div");
        col.className = 'col';
        const el = document.createElement("div");
        el.className = 'item card p-3 h-100';
        el.tabIndex = 0;
        el.dataset.title = item.title;
        let totalTime = undefined;
        if (item.type !== "folder") {
            totalTime = parseInt(item.cookTime) + parseInt(item.prepTime);
            console.log(totalTime, item.cookTime, item.prepTime);
            console.log()
        }
        // TODO: Main view item elements
        el.innerHTML = `
                    
                    <div class="icon ${item.type === "folder" ? "folder" : "file"} mb-2">${item.type === "folder" ? "📂" : "📄"}</div>
                    <div class="fw-bold text-truncate mb-1" style="font-size: 1.5rem">${item.title}</div>
                    <div class="meta d-flex justify-content-between mt-1" style="font-size: 1rem;">
                        <div style="font-size: 1rem">${item.type || item.foodName}</div>
                        <div>${totalTime || ""} mins</div>
                    </div>
                `;
        el.addEventListener("click", () => {
            selectItem(item, el);
        });
        el.addEventListener("dblclick", () => {
            if (item.type === 'folder') {
                currentPath.push(item.title);
                currentNode = findNodeByPath(currentPath);
                displayAll();
            } else {
                openFile(item);
            }
        });
        el.addEventListener("keydown", e => {
            if (e.key === 'Enter') {
                el.dispatchEvent(new Event('dblclick'));
            }
        })
        col.appendChild(el);
        view.appendChild(col);
    })
}

function displayBreadcrumb() {
    breadcrumb.innerHTML = "";
    currentPath.forEach((p, i) => {
        const li = document.createElement("li");
        li.className = 'breadcrumb-item';
        const btn = document.createElement("button");
        btn.textContent = p;
        btn.onclick = () => {
            //shrink current path to a selected folder
            navigateTo(currentPath.slice(0, i + 1));
        };
        li.appendChild(btn);
        breadcrumb.appendChild(li);
    });
}


function displayAll() {
    displayTree();
    displayView();
    displayBreadcrumb();
    selected = null;
    document.getElementById('detailName').textContent = 'Select an Item';
    document.getElementById('detailType').textContent = '-';
    document.getElementById('detailMeta').textContent = '';
    document.getElementById('detailContent').textContent = 'Preview or metadata here';
    document.getElementById('previewInner').textContent = 'Nothing selected';
}

function navigateTo(pathArr) {
    currentPath = pathArr;
    currentNode = findNodeByPath(pathArr);
    displayAll();
}

function openFile(node) {
    selectItem(node);
    alert('Open file: ' + node.name + '\n open Recipe not implemented. refer to quick preview');
}

function selectItem(node, elemRef) {
    selected = node;
    Array.from(view.querySelectorAll('.item')).forEach(c => c.classList.remove('selected'));
    if (elemRef) elemRef.classList.add('selected');

    document.getElementById('detailMeta').textContent = (node.rating ? "rating: " + node.rating + ' • ' : '') + (node.prepTime && node.cookTime ? node.prepTime+node.cookTime + " mins" : "");
    document.getElementById('detailName').textContent = node.type || "Recipe";
    const icon = document.getElementById('detailIcon');
    icon.textContent = node.type === 'folder' ? '📁' : '📄';
    icon.className = 'big icon ' + (node.type === 'folder' ? 'folder' : 'file');
    document.getElementById('detailContent').textContent = node.type === 'folder' ? (node.children ? `${node.children.length} items` : 'Empty folder') : `${node.title}`;

    // TODO: preview area
    const previewInner = document.getElementById('previewInner');
    if (node.type === 'file') {
        if (node.previewType === 'image' && node.src) {
            previewInner.innerHTML = `<img src="${node.src}" alt="${node.name}" class="img-fluid rounded">`;
        } else if (node.content) {
            const pre = document.createElement('pre');
            pre.classList.add('p-2', 'rounded');
            pre.style.whiteSpace = 'pre-wrap';
            pre.style.fontSize = '1rem';
            pre.textContent = node.content;
            previewInner.innerHTML = '';
            previewInner.appendChild(pre);
        } else {
            previewInner.textContent = 'No preview available.';
        }
    } else {
        previewInner.innerHTML = `<div>${node.children ? node.children.length : 0} item(s)</div>`;
    }
}

upBtn.addEventListener("click", () => {
    if (currentPath.length > 1) {
        currentPath.pop();
        currentNode = findNodeByPath(currentPath);
        displayAll();
    }
})

searchInput.addEventListener("input", () => displayView());


currentNode = FS;
displayAll();