# 💖 3D Rotating Photo Gallery – Love Edition

This is a **personalized 3D rotating photo gallery** built using **HTML, CSS, and JavaScript**.  
It is designed as a **romantic gift website**, where photos of your loved one rotate beautifully in 3D space, with a glowing love message at the center.

---

## ✨ Features
- 🎞️ **3D Rotating Carousel** of photos with smooth animation.  
- 🖱️ **Mouse Movement Interaction** – rotate the photo ring by moving the cursor.  
- 💡 **Hover Effects** – photos zoom in with a glowing border when hovered.  
- ❤️ **Central Message** ("Love You Dear ...") stays in the center and moves slightly with cursor for a magical effect.  
- 🔍 **Fullscreen Popup** – click on any photo to open it fullscreen with a glowing effect.  
- 💌 **Love Message Popup** – clicking the central "I Love You ❤️" text opens a special romantic message inside the site.  
- 📱 **Responsive & User Friendly** – works on different screen sizes.

---

## 🛠️ Technologies Used
- **HTML5** – Structure of the webpage  
- **CSS3** – Styling, animations, and glowing effects  
- **JavaScript (Vanilla JS)** – Carousel rotation, popup handling, cursor effects  

---

## 📷 How It Works
1. Photos are arranged in a **3D circle** using `transform: rotateY` and `translateZ`.  
2. The carousel **auto-rotates**, but can also be controlled by moving the cursor.  
3. Hovering a photo adds **highlight + shadow effects**.  
4. Clicking a photo opens it in a **fullscreen popup**.  
5. Clicking the **center "I Love You ❤️" text** opens a **custom love message popup**.  

---

## 🚀 How to Run
1. Clone or download this repository.  
2. Place your photos in the `images/` folder.  
3. Open the `index.html` file in any browser.  

---

## ❤️ Personalization
- Change the **center text** in the HTML:
  ```html
  <div class="center-text">Love You Dear Name ❤️</div>
