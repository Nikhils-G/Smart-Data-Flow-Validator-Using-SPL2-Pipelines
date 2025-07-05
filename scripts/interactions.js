document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".score-circle-progress");
  const scoreValue = document.querySelector(".score-value");

  setTimeout(() => {
    progress.style.strokeDashoffset = "132";
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        scoreValue.style.transform = "scale(1.1)";
        scoreValue.style.textShadow = "0 0 10px var(--success)";
        setTimeout(() => {
          scoreValue.style.transform = "scale(1)";
          scoreValue.style.textShadow = "";
        }, 300);
      }, i * 1500);
    }
  }, 800);

  const timeRange = document.getElementById("timeRange");
  timeRange.addEventListener("change", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.opacity = "0.7";
      card.style.transform = "translateY(10px)";
    });
    setTimeout(() => {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    }, 800);
  });

  const refreshBtn = document.querySelector(".refresh-btn");
  const refreshIcon = refreshBtn.querySelector("i");
  const refreshText = refreshBtn.querySelector("span");

  refreshBtn.addEventListener("click", () => {
    refreshIcon.style.transform = "rotate(360deg)";
    refreshText.innerHTML = `<i class="fas fa-cog fa-spin"></i> Analyzing`;
    setTimeout(() => {
      refreshIcon.style.transform = "";
      refreshText.innerHTML = `Refresh`;
    }, 2000);

    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.3)";
        setTimeout(() => {
          card.style.transform = "";
          card.style.boxShadow = "";
        }, 300);
      }, i * 100);
    });
  });
});
