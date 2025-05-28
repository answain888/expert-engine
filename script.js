document.getElementById("adForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const videoURL = document.getElementById("videoURL").value;
  const description = document.getElementById("description").value;
  const container = document.getElementById("adsContainer");

  const card = document.createElement("div");
  card.className = "ad-card";

  const h3 = document.createElement("h3");
  h3.textContent = title;

  let videoElement;
  if (videoURL.includes("youtube")) {
    // YouTube embed
    videoElement = document.createElement("iframe");
    videoElement.src = videoURL;
    videoElement.allowFullscreen = true;
  } else {
    // mp4 video
    videoElement = document.createElement("video");
    videoElement.src = videoURL;
    videoElement.controls = true;
  }

  const p = document.createElement("p");
  p.textContent = description;

  card.appendChild(h3);
  card.appendChild(videoElement);
  card.appendChild(p);

  container.prepend(card);

  // Очистка формы
  e.target.reset();
});
