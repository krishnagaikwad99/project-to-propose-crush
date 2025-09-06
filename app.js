     const carousel = document.getElementById("carousel");
    const loveText = document.getElementById("loveText");
    const images = carousel.querySelectorAll("img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");
    const popupMsg = document.getElementById("popupMsg");
    const closeBtn = document.getElementById("closeBtn");

    const radius = 400;
    const total = images.length;

    
    images.forEach((img, i) => {
      const angle = (i / total) * (2 * Math.PI);
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      img.style.transform = `translateX(${x}px) translateZ(${z}px)`;
    });

  
    let rotationY = 0;
    let rotationX = 0;

    
    function autoRotate() {
      rotationY += 0.3; 
      updateRotation();
      requestAnimationFrame(autoRotate);
    }

    function updateRotation() {
      carousel.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }

   
    document.addEventListener("mousemove", (e) => {
      let offsetX = (e.clientX / window.innerWidth - 0.5) * 30; 
      let offsetY = (e.clientY / window.innerHeight - 0.5) * 15; 
      rotationX = offsetY;
      carousel.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

      
      loveText.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY * 2}px)`;
    });

   
    images.forEach(img => {
      img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.style.display = "block";
        popupMsg.style.display = "none";
        popupImg.src = img.src;
      });
    });

  
    loveText.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.style.display = "none";
      popupMsg.style.display = "block";
      popupMsg.textContent = "Enter your Message for Them";
    });

    
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target !== popupImg && e.target !== popupMsg) {
        popup.style.display = "none";
      }
    });

    autoRotate();
