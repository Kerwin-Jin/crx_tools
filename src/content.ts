console.log('this is content script')
const rootDiv = document.querySelector('#root')
const aDiv = document.createElement('div')

aDiv.innerText = 'this is insert content script'
rootDiv?.appendChild(aDiv)