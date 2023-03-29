const questions = document.getElementsByClassName("questions");

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
