// function cursor

let cursor = document.querySelector('.cursor')
let cursorInner = document.querySelector('.cursorInner')
document.addEventListener('mousemove', (event) => {
  cursor.style.cssText = cursorInner.style.cssText =
    'left: ' + event.clientX + 'px; top: ' + event.clientY + 'px;'
})

// end of function cursor

// funchion progress bar and to top

const showOnPx = 100
const pageProgressBar = document.querySelector('.progresss-bar')

const scrollContainer = () => {
  return document.documentElement || document.body
}

document.addEventListener('scroll', () => {
  console.log('Scroll Height: ', scrollContainer().scrollHeight)
  console.log('Client Height: ', scrollContainer().clientHeight)

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100

  pageProgressBar.style.width = `${scrolledPercentage}%`
})

// end of function progress bar and to top