// script.js — Final Enhanced Version

const shapes = [
  { id: "square", title: "Square (Area)", formula: "side × side", kind: "area", fields: ["Side"] },
  { id: "rectangle", title: "Rectangle (Area)", formula: "length × breadth", kind: "area", fields: ["Length", "Breadth"] },
  { id: "circle", title: "Circle (Area)", formula: "πr²", kind: "area", fields: ["Radius"] },
  { id: "triangle", title: "Triangle (Area)", formula: "½ × base × height", kind: "area", fields: ["Base", "Height"] },
  { id: "cube", title: "Cube (Volume)", formula: "side³", kind: "volume", fields: ["Side"] },
  { id: "cuboid", title: "Cuboid (Volume)", formula: "length × breadth × height", kind: "volume", fields: ["Length", "Breadth", "Height"] },
  { id: "sphere", title: "Sphere (Volume)", formula: "(4/3)πr³", kind: "volume", fields: ["Radius"] },
  { id: "cylinder", title: "Cylinder (Volume)", formula: "πr²h", kind: "volume", fields: ["Radius", "Height"] },
  { id: "cone", title: "Cone (Volume)", formula: "(1/3)πr²h", kind: "volume", fields: ["Radius", "Height"] },
];

const icons = {
  square: `<rect x="10" y="10" width="80" height="80" rx="8" fill="#3b82f6" stroke="#1e40af" stroke-width="3"/>`,
  rectangle: `<rect x="8" y="20" width="100" height="60" rx="6" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>`,
  circle: `<circle cx="50" cy="50" r="40" fill="#10b981" stroke="#065f46" stroke-width="3"/>`,
  triangle: `<polygon points="50,10 90,90 10,90" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>`,
  cube: `<rect x="22" y="22" width="56" height="56" fill="#3b82f6" stroke="#1e40af" stroke-width="3"/>`,
  cuboid: `<rect x="14" y="24" width="92" height="52" rx="6" fill="#f59e0b" stroke="#7f1d1d" stroke-width="3"/>`,
  sphere: `<circle cx="50" cy="50" r="38" fill="#10b981" stroke="#065f46" stroke-width="3"/>`,
  cylinder: `<ellipse cx="50" cy="25" rx="28" ry="12" fill="#f43f5e" stroke="#7f1d1d" stroke-width="3"/><rect x="22" y="25" width="56" height="46" fill="#f43f5e" stroke="#7f1d1d" stroke-width="3"/><ellipse cx="50" cy="71" rx="28" ry="12" fill="#f43f5e" stroke="#7f1d1d" stroke-width="3"/>`,
  cone: `<polygon points="50,12 82,86 18,86" fill="#8b5cf6" stroke="#4c1d95" stroke-width="3"/>`
};

// --------- Generate Cards Dynamically ----------
const cardsContainer = document.getElementById("cards-container");
cardsContainer.innerHTML = shapes.map(shape => `
  <article class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div class="flex items-center gap-4">
      <svg class="w-14 h-14" viewBox="0 0 100 100">${icons[shape.id]}</svg>
      <div>
        <h3 class="text-lg font-bold">${shape.title}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">${shape.formula}</p>
      </div>
    </div>
    <div class="mt-4 grid ${shape.fields.length > 1 ? 'grid-cols-2 gap-2' : ''}">
      ${shape.fields.map(f => `<input id="${shape.id}-${f.toLowerCase()}" type="number" placeholder="${f}" class="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition"/>`).join('')}
    </div>
    <div class="mt-4 flex gap-2">
      <button onclick="calculate('${shape.kind}','${shape.id}')" class="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Server</button>
      <button onclick="calcLocal('${shape.id}','${shape.kind}')" class="flex-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 py-2 rounded">Local</button>
    </div>
    <p id="result-${shape.id}" class="mt-3 text-sm font-medium text-center"></p>
  </article>
`).join("");

// --------- Toast ---------
function showToast(msg, success = true) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `
    px-4 py-2 rounded-lg shadow-lg font-medium text-white transform translate-x-8 opacity-0 transition-all duration-300
    ${success ? "bg-green-600" : "bg-red-600"}
  `;
  toast.textContent = msg;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(8px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --------- Dark Mode ---------
const html = document.documentElement;
const toggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "true") html.classList.add("dark");

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const enabled = html.classList.contains("dark");
  localStorage.setItem("darkMode", enabled);
  showToast(enabled ? "🌙 Dark mode ON" : "☀️ Light mode OFF", true);
});

// --------- Local Calculations ---------
const PI = Math.PI;

function read(id) {
  const val = parseFloat(document.getElementById(id)?.value);
  return isNaN(val) ? null : val;
}

function calcLocal(shape, kind) {
  try {
    let r, result;
    switch (shape) {
      case "square": r = read("square-side"); result = r*r; break;
      case "rectangle": result = read("rectangle-length") * read("rectangle-breadth"); break;
      case "circle": r = read("circle-radius"); result = PI*r*r; break;
      case "triangle": result = 0.5 * read("triangle-base") * read("triangle-height"); break;
      case "cube": r = read("cube-side"); result = r**3; break;
      case "cuboid": result = read("cuboid-length") * read("cuboid-breadth") * read("cuboid-height"); break;
      case "sphere": r = read("sphere-radius"); result = (4/3)*PI*r**3; break;
      case "cylinder": result = PI * read("cylinder-radius")**2 * read("cylinder-height"); break;
      case "cone": result = (1/3)*PI*read("cone-radius")**2*read("cone-height"); break;
      default: throw "Invalid shape";
    }
    if (!result || isNaN(result)) throw "Missing values";
    result = result.toFixed(4);
    document.getElementById(`result-${shape}`).textContent = `${kind.toUpperCase()}: ${result}`;
    showToast(`${kind.toUpperCase()} of ${shape}: ${result}`, true);
  } catch (e) {
    showToast("Error: " + e, false);
  }
}

// --------- Server Call ---------
async function calculate(kind, shape) {
  const params = {};
  document.querySelectorAll(`[id^="${shape}-"]`).forEach(el => {
    params[el.id.split("-")[1]] = parseFloat(el.value);
  });

  if (Object.values(params).some(v => isNaN(v))) {
    showToast("Please fill all inputs!", false);
    return;
  }

  try {
    const res = await fetch(`/api/${kind}/${shape}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });
    const data = await res.json();
    if (res.ok && data.result !== undefined) {
      const val = Number(data.result).toFixed(4);
      document.getElementById(`result-${shape}`).textContent = `${kind.toUpperCase()}: ${val}`;
      showToast(`${kind.toUpperCase()} of ${shape}: ${val}`, true);
    } else throw new Error(data.error || "Server error");
  } catch (err) {
    showToast("Server Error!", false);
  }
}
