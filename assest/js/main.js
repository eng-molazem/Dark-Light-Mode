const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    themeIcon.addEventListener("click", () => {
      body.classList.toggle("night");
      body.classList.toggle("day");

      if (body.classList.contains("night")) {
        themeIcon.classList.replace("fa-sun", "fa-moon");
      } else {
        themeIcon.classList.replace("fa-moon", "fa-sun");
      }
    });