/*------------------------input search--------------------------*/

document.querySelector('#integration').oninput = function(){
    let val = this.value.trim();
    let integrationItems = document.querySelectorAll('.integration');
    if (val != ''){
      integrationItems.forEach(function(elem){
        if (elem.innerText.search(val) == -1) {
          elem.classList.add('hide');
        }
        else {
          elem.classList.remove('hide');
        }
      });
    }
  }
  
  /*-------------------filter integrations------------------*/
  
  const filterBox = document.querySelectorAll('.box');
  
  document.querySelector('.content_buttons').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;
  
    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
  
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass!=='all') {
            elem.classList.add('hide');
        }
    });
  
  });