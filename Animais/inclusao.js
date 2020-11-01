function LongerFontSiz(event){
  if(event.key === 't') {
    return document.documentElement.classList.toggle('fontSize')
  }
}

window.addEventListener('keydown', LongerFontSiz);