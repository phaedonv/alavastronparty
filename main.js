posterData = [{
    "id" : 1,
    "image" : "https://res.cloudinary.com/thisisnotanimage/image/upload/v1613122599/4zbqeaavod7ozfaebl0no3ci29ys.png",
    "download" : "v1613122599/4zbqeaavod7ozfaebl0no3ci29ys.png"
}, {
    "id" : 2,
    "image" : "https://res.cloudinary.com/thisisnotanimage/image/upload/v1621354287/logo1_n4on1d.png",
    "download" : "v1621354287/logo1_n4on1d.png"
}]

posterData.forEach(function createPoster(obj) {
    //create image tag with poster preview
    const img = document.createElement("img");
    img.src = obj.image;
    img.classList.add("img-class");
    img.id = "poster";
    document.getElementById("poster-div").appendChild(img);

    //create downloadable button
    const btn = document.createElement("a");
    btn.id = "link";
    btn.href = `https://res.cloudinary.com/thisisnotanimage/image/upload/fl_attachment:poster/${obj.download}`;
    btn.innerHTML = "download image";
    document.getElementById("poster-div").appendChild(btn);    
});

"https://res.cloudinary.com/thisisnotanimage/image/upload/fl_attachment:poster/v1621354287/logo1_n4on1d.png"