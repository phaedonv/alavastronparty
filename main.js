function createPoster() {
    for(let i = 0; i < 100; i++) {
        const img = document.createElement("img");
        img.src = "https://picsum.photos/200/301?id=" + i;
        if(i === 5) {
          img.style.borderRadius = "50%";
        }
        img.classList.add("img-class");
        img.id = "poster";
        document.body.appendChild(img);
      }
}

createPoster();


