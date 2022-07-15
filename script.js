// select all needed elements
const form = document.querySelector('#quiz-form')
const answers = Array.from(document.getElementsByClassName('answer'))
const questions = document.querySelectorAll('.question-item')
const alert = document.querySelector('#alert')

// EventListener for the form
form.addEventListener('submit', e => {
  e.preventDefault()

  // have unanswered questions show up as incorrect
  answers.forEach(ans => {
    parent = ans.closest(".question-item")
    parent.classList.add('incorrect')
    parent.classList.remove('correct')
  })

  // get all the marked answers
  const checkedAnswers = answers.filter(ans => ans.checked)
  let value = 0

  // add specific class names based on correctness
  checkedAnswers.forEach(ans => {
    if (ans.value === "true") {
      parent = ans.closest(".question-item")
      parent.classList.add('correct')
      parent.classList.remove('incorrect')
      value += 1
    } else {
      parent = ans.closest(".question-item")
      parent.classList.add('incorrect')
      parent.classList.remove('correct')
    }
  })

  // display alert if all answers are correct
  if (value === checkedAnswers.length) {
    console.log("working")
    alert.classList.add('active')
    setTimeout(() => {
      alert.classList.remove("active")
    }, 1000)
  }
})