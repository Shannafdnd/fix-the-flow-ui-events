let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', RainbowAnimation)
design.addEventListener('animationed', RainbowAnimation)

function RainbowAnimation() {
  design.classList.toggle('rainbow-bg')
}

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', TypeAnimation)
development.addEventListener('animationed', TypeAnimation)

function TypeAnimation() {
  development.classList.toggle('typing')
}

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', flowAnimation)
flow.addEventListener('animationed', flowAnimation)

function flowAnimation() {
  flow.classList.toggle('flowing')
}

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click',yellow)

function yellow() {
  fix.classList.toggle('yellow')
}

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', rotateAnimation)
and.addEventListener('animationed', rotateAnimation)

function rotateAnimation() {
  and.classList.toggle('rotate')
}

let events = document.querySelector('a:nth-of-type(11)')

events.addEventListener('click',scale)

function scale() {
  events.classList.toggle('scale')
}

let states = document.querySelector('a:nth-of-type(18)')

states.addEventListener('click',scale2)

function scale2() {
  states.classList.toggle('scale2')
}

let code = document.querySelector('a:nth-of-type(20)')

code.addEventListener('click',coding)

function coding() {
  code.classList.toggle('code')
}

let feedforward = document.querySelector('a:nth-of-type(16)')

feedforward.addEventListener('click',arrow)

function arrow() {
  feedforward.classList.toggle('arrow')
}