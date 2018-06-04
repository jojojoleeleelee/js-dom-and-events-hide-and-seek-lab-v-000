function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested = '#nested', target = '.target') {
  return document.querySelector(`${nested} ${target}`)
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')

  list.forEach(element => {
    element.innerHTML = parseInt(element.innerHTML) + n
  })
}

function deepestChild() {
  const x = document.querySelectorAll('#grand-node div')
  return x[x.length - 1]
}
