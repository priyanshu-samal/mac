

📱 **Watch the Demo**: [View on X (Twitter)](https://x.com/PriyanshuS92042/status/1938955418895806731)

---

# 3D MacBook Animation with React Three Fiber

This project is a 3D animated MacBook built using React Three Fiber and Drei. The MacBook's screen opens and closes smoothly as you scroll, and displays a custom texture on the screen.

## Features
- 3D MacBook model loaded from a GLB file
- Smooth screen opening/closing animation based on scroll position
- Custom texture applied to the screen
- Realistic lighting with HDR environment
- Responsive and modern UI

## Tech Stack
- [React](https://reactjs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Drei](https://docs.pmnd.rs/drei/introduction)
- [Three.js](https://threejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (optional, for styling)

## Getting Started
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure
- `src/App.jsx` - Main app, sets up the 3D canvas and scroll controls
- `src/MacContainer.jsx` - Loads the MacBook model and handles animation
- `public/mac.glb` - 3D model file
- `public/red.jpg` - Texture for the screen

## Demo
<!-- Add a GIF or image here to showcase the animation -->

## License
MIT
