# 🚀 Kodawave

A modern, high-performance React component collection focused on immersive UI/UX. This project demonstrates advanced frontend techniques like **3D sliders**, **infinite motion systems**, and **scroll-based animations** — built with scalability and clean architecture in mind.

---

## ✨ Key Features

- 🎯 **3D Creative Slider**  
  Interactive 3D carousel using Swiper's advanced effects for depth and realism.

- 🔁 **Infinite Logo Ticker**  
  Smooth, non-stop marquee animation with zero lag or jitter.

- 🎬 **GSAP Scroll Animations**  
  Optimized reveal animations triggered on scroll using `gsap.context()`.

- 📱 **Fully Responsive**  
  Mobile-first design ensuring consistent experience across all devices.

- ⚡ **Performance Optimized**  
  GPU-accelerated animations, lazy loading, and clean rendering logic.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Tailwind CSS 4
- **Animation:** GSAP, Framer Motion
- **Slider Engine:** Swiper.js
- **Icons:** Lucide React
- **Build Tool:** Vite

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

---

## 📂 Project Structure

```text
src/
├── assets/                 # Static images, icons, media
│
├── components/
│   ├── layout/
│   │   └── RootLayout.jsx  # Layout wrapper
│   │
│   ├── shared/
│   │   ├── Animation.jsx   # GSAP scroll animation wrapper
│   │   └── NavLinks.jsx    # Navigation links
│   │
│   └── ui/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── Hero.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Feature/
│   │   ├── FeatureCard.jsx
│   │   ├── FeatureScroll.jsx
│   │   └── VisualSlider.jsx   # 🔥 3D Visual Showcase
│   │
│   ├── Blog/
│   │   ├── BlogListing.jsx
│   │   └── BlogDetails.jsx
│   │
│   └── ContactPage.jsx
│
├── data/                   # Static data (e.g. blog data)
├── hooks/                  # Custom React hooks
│
├── router/
│   └── router.jsx          # App routing config
│
├── App.jsx
└── main.jsx
```

---

## 💡 Implementation Highlights

### ✅ GSAP Best Practice

- Used `gsap.context()` inside `useEffect`
- Prevents memory leaks
- Ensures proper cleanup on component unmount

### ✅ Smooth Infinite Motion

- Linear animation timing
- No pause or jitter between loops
- Optimized for continuous UX

### ✅ Strong Visual Hierarchy

- Side slides use reduced opacity & grayscale
- Center slide stays dominant for focus

---

## 🎯 Why This Project Stands Out

- Clean and scalable folder structure
- Real-world UI patterns (not just demo stuff)
- Performance-first animation handling
- Production-ready component architecture

---

## 🤝 Contact

**Shams Al Labib**  
Frontend Developer | Computer Science Student
