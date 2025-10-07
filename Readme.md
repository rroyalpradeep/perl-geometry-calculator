# 🧮 Geometry Calculator (Perl + HTML + JS)

A full‑stack **geometry calculator web app** built with **Perl (Mojolicious)** as backend and a modern **HTML + Tailwind + JavaScript** frontend. It allows users to calculate **areas and volumes** of various 2D and 3D shapes interactively.

---

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perl Version](https://img.shields.io/badge/Perl-5.34-orange)](https://www.perl.org/)
[![Last Commit](https://img.shields.io/github/last-commit/rroyalpradeep/perl-geometry-calculator)](https://github.com/<your-username>/perl-geometry-calculator/commits/main)
[![Issues](https://img.shields.io/github/issues/rroyalpradeep/perl-geometry-calculator)](https://github.com/<your-username>/perl-geometry-calculator/issues)
[![Forks](https://img.shields.io/github/forks/rroyalpradeep/perl-geometry-calculator)](https://github.com/<your-username>/perl-geometry-calculator/network/members)
[![Stars](https://img.shields.io/github/stars/rroyalpradeep/perl-geometry-calculator)](https://github.com/<your-username>/perl-geometry-calculator/stargazers)

> Full-stack Geometry Calculator with Perl backend, TailwindCSS frontend, and interactive 2D/3D shape calculations.



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

## 📸 Screenshots
<img width="1920" height="1200" alt="Screenshot from 2025-10-07 15-20-46" src="https://github.com/user-attachments/assets/66c3eb49-ef7d-491e-becf-9248ac3e0e5f" />


---

## 👤 Author
**Pradeep Soni**  
Developed as a professional Perl‑based full‑stack project demonstrating modular backend design and interactive modern frontend.

