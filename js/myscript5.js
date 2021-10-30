
const searchbox = document.querySelector('.search');
const filterbrand = () => {
  
            let searchValue = searchbox.value.toLowerCase();
            const brand = document.querySelectorAll('.brand-inner');
            Array.from(brand).forEach(value => {
               let filterdata =  value.querySelector('img').getAttribute('alt');
               let label = filterdata.toLowerCase();
               if (label.indexOf(searchValue) != -1) 
                {
                  value.style.display = "";
                } 
                else 
                {
                  value.style.display = "none";
                } 
             });              
  }
searchbox.addEventListener('keyup', filterbrand);


