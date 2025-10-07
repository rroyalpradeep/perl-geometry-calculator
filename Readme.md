# 🧮 Geometry Calculator (Perl + HTML + JS)

A full‑stack **geometry calculator web app** built with **Perl (Mojolicious)** as backend and a modern **HTML + Tailwind + JavaScript** frontend. It allows users to calculate **areas and volumes** of various 2D and 3D shapes interactively.

---

## 🚀 Features

- 🧩 **Perl Modular Backend**
  - Organized under `lib/MyMath/Area.pm` and `lib/MyMath/Volume.pm`
  - RESTful API endpoints using **Mojolicious::Lite**
  - JSON responses for shape calculations

- 💻 **Frontend (HTML + JS + Tailwind)**
  - Interactive cards for shapes (Square, Rectangle, Circle, Cube, Sphere, Cylinder, Cone)
  - Each card accepts relevant inputs and sends requests to the backend via **Fetch API**
  - Results displayed as **animated toast notifications**
  - Fully responsive layout

- 🌗 **Dark Mode**
  - Beautiful dark/light gradient backgrounds
  - Auto color adjustments for all elements

- 🎨 **Enhanced UI/UX**
  - 3D‑styled SVG icons for each shape
  - Glassy card design with hover animations
  - Smooth transitions, hover scaling, and soft shadows

---

## 🧱 Project Structure

```
Perl-Geometry-Calculator/
│
├── app.pl                  # Mojolicious Lite backend server
├── lib/
│   └── MyMath/
│       ├── Area.pm         # Area calculation module
│       └── Volume.pm       # Volume calculation module
│
├── public/
│   ├── index.html          # Frontend HTML
│   ├── script.js           # Fetch API, dark mode & toast logic
│   └── style.css           # Enhanced UI styling
│
└── README.md               # Project documentation
```

---

## ⚙️ Dependencies

Install these Perl modules before running:

```bash
cpanm Mojolicious JSON::MaybeXS
```

---

## ▶️ Run Instructions

1. Navigate to the project folder:
   ```bash
   cd Perl-Geometry-Calculator
   ```
2. Run the Mojolicious server:
   ```bash
   perl app.pl daemon --listen http://*:3000
   ```
3. Open your browser at:
   ```
   http://127.0.0.1:3000
   ```

---

## 📚 API Endpoints

### POST `/api/area/:shape`
Calculate area of 2D shapes.

**Example:**
```bash
POST /api/area/rectangle
{
  "length": 10,
  "width": 5
}
```

**Response:**
```json
{ "area": 50 }
```

### POST `/api/volume/:shape`
Calculate volume of 3D shapes.

**Example:**
```bash
POST /api/volume/cube
{
  "side": 4
}
```

**Response:**
```json
{ "volume": 64 }
```

---

## 🧮 Supported Shapes

| Category | Shape | Formula |
|-----------|--------|----------|
| **Area** | Square | a² |
|  | Rectangle | l × w |
|  | Circle | πr² |
| **Volume** | Cube | a³ |
|  | Sphere | 4/3 πr³ |
|  | Cylinder | πr²h |
|  | Cone | 1/3 πr²h |

---

## ✨ UI Features
- **Dynamic toast notifications** for results
- **Smooth dark mode toggle** with persistent state
- **Glassy card hover effects**
- **3D icons for better visualization**

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Backend** | Perl (Mojolicious Lite) |
| **Modules** | MyMath::Area, MyMath::Volume |
| **Frontend** | HTML, TailwindCSS, JavaScript |
| **UI Enhancements** | Custom CSS animations & SVGs |

---

## 📸 Screenshots (suggested)
_Add screenshots of your running app in both light and dark modes._

---

## 👤 Author
**Pradeep Soni**  
Developed as a professional Perl‑based full‑stack project demonstrating modular backend design and interactive modern frontend.

