const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
if(tabMenu.length) {
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('active')
    })
    tabContent[index].classList.add('active')
  }
  
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => activeTab(index))
  })
}