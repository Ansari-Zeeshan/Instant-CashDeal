
    const s1 = document.getElementById('select1');
    const s2 = document.getElementById('select2');
   
    const next1=document.querySelector('#next1');
    const form=document.querySelector('form');
    const next2=document.querySelector('#next2');
    const next3=document.querySelector('#next3');
    const prev=document.querySelectorAll('.prev-btn');
    const myborder=document.querySelectorAll('.myborder');
    const nextbtn=document.querySelectorAll('.next');
    let index=0;

    next1.addEventListener('click', ()=>
    {
        
        const storerror = document.querySelector('#storageerror');
        const moderror = document.querySelector('#modelerror');
        const typeerror = document.querySelector('#typeerror');
         for(let i=0;i<selected.length;i++)
           {
              if(selected[i].innerText==="Please Select Model")
              {
                moderror.innerHTML="Please Choose Model";
                return false;
              }
              else
              {
                moderror.innerHTML="";
              }
              if(selected[i].innerText==="Please Select Storage")
              {
                storerror.innerHTML="Please Choose Storage";
                return false;
              }
              else
              {
                storerror.innerHTML="";
              }
              if(selected[i].innerText==="Please Select Type")
              {
                typeerror.innerHTML="Please Choose Type";
                return false;
              }
              else
              {
                typeerror.innerHTML="";
              }
           }

         for(let i =0;i<myborder.length;i++)
         {
                myborder[i].classList.remove('active');
         }
            myborder[1].classList.add('active');
            // con3.style.display = 'none';
            index++;
            window.scrollTo(
            {
               top: 0,
               left : 0,
            });
            myborder[0].classList.add('success');
            
    });

    next2.addEventListener('click', ()=>
    {
        const radiovalidation1 = document.getElementsByName('condition');
        const smallradio1= document.querySelector('.smallradio1');
        const smallradio2= document.querySelector('.smallradio2');
        const smallradio3= document.querySelector('.smallradio3');
        const smallradio4= document.querySelector('.smallradio4');

        let count1=0;

        for(let i=0;i<radiovalidation1.length;i++)
        {
            if(radiovalidation1[i].checked)
            {
                count1++;
                break;
            }
        }
        if(count1==0)
        {
            smallradio1.innerHTML="Please Select Condition";
        }
        else
        {
            smallradio1.innerHTML="";
        }

        const radiovalidation2 = document.getElementsByName('deviceage');
        let  count2=0;
        for(let i=0;i<radiovalidation2.length;i++)
        {
            if(radiovalidation2[i].checked)
            {
                count2++;
                break;
            }
        }
        if(count2==0)
        {
            smallradio2.innerHTML="Please Select Device Age";
        }
        else
        {
            smallradio2.innerHTML="";
        }

        const radiovalidation3 = document.getElementsByName('touch');
        let count3=0;
        for(let i=0;i<radiovalidation3.length;i++)
        {
            if(radiovalidation3[i].checked)
            {
                count3++;
                break;
            }
        }
        if(count3==0)
        {
            smallradio3.innerHTML="Please Select Touch Working";
        }
        else
        {
            smallradio3.innerHTML="";
        }

        const checkvalidation1 = document.querySelector('#box');
        const checkvalidation2 = document.querySelector('#charger');
        const checkvalidation3 = document.querySelector('#bill');
        const checkvalidation4 = document.querySelector('#earphone');
        const checkvalidation5 = document.querySelector('#noneof');
        let count4=0;

        if(checkvalidation1.checked)
        {
            count4++;
        }
        else if(checkvalidation2.checked)
        {
            count4++;
        }
        else if(checkvalidation3.checked)
        {
            count4++;
        }
        else if(checkvalidation4.checked)
        {
            count4++;
        }
        else if(checkvalidation5.checked)
        {
            count4++;
        }
        if(count4==0)
        {
            smallradio4.innerHTML="Please Select Atleast 1 option";
        }
        else
        {
            smallradio4.innerHTML="";
        }

        if(count1 && count2 && count3 && count4)
        {
            // smallradio[i].innerHTML="";
            // con1.style.display = 'none';
            // con2.style.display = 'none';
            // con3.style.display = 'block'; 
            for(let i =0;i<myborder.length;i++)
            {
                myborder[i].classList.remove('active');
            }
            myborder[2].classList.add('active');
            index++;
        }
        else
        {
            return false;
        }
        
         window.scrollTo(
        {
           top:0,
           left : 0,
        });
        myborder[1].classList.add('success');

    });

    for(let i = 0;i<prev.length;i++)
    {
        prev[i].addEventListener('click', ()=>
        {
      
        if(index==0)
        {
            index=myborder.length-1;
            // index--;
        }
        else  
        {
            index--;
        }
        for(let i=0;i<myborder.length;i++)
        {
            myborder[i].classList.remove('active');
        }
             window.scrollTo(
            {
               top:0,
               left : 0,
            });
            myborder[index].classList.add('active');
        });    
    }

    // select box working

    const selected = document.querySelectorAll(".selected");
    const optionsContainer = document.querySelectorAll(".options-container");
    const small2=document.querySelectorAll('.small2');
    const searchBox = document.querySelector(".search-box input");
    const optlist = document.querySelectorAll('#myoption');
    
        function showoption(i)
          {
            
            let optionfor=optionsContainer[i].querySelectorAll('.option');
            Array.from(optionfor).forEach(o=>
            {
                o.addEventListener('click', ()=>
                {
                   selected[i].innerHTML=o.querySelector('label').innerHTML;
                   optionsContainer[i].classList.remove('active');    
                });
            });
           }    


      // searching option
       searchBox.addEventListener("keyup", function(e) {
       filterList(e.target.value); 
        });

        const filterList = searchTerm => {
          searchTerm = searchTerm.toLowerCase();
          Array.from(optlist).forEach(option => {
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            if (label.indexOf(searchTerm) != -1) {
              option.style.display = "block";
            } else {
              option.style.display = "none";
            }
          });
        };
        
    for(let i = 0;i<selected.length;i++)
    {    
        selected[i].addEventListener("click", () => {
          optionsContainer[i].classList.toggle("active");
          showoption(i);
        });
    }
        
    const modeloption = optionsContainer[0].querySelectorAll('.option');
    const modeloption2 = optionsContainer[1].querySelectorAll('.option');
    const modeloption3 = optionsContainer[2].querySelectorAll('.option');
    
    for(let i=0; i<modeloption.length; i++)
    {
        modeloption[i].addEventListener('click', (event)=>
        {
            let input = modeloption[i].querySelector('input');
            if(!input.checked)
            {
                input.checked=true;
            }
        })
    }
    
    for(let i=0; i<modeloption2.length; i++)
    {
        modeloption2[i].addEventListener('click', (event)=>
        {
            let input = modeloption2[i].querySelector('input');
            if(!input.checked)
            {
                input.checked=true;
            }
        })
    }
    
    for(let i=0; i<modeloption3.length; i++)
    {
        modeloption3[i].addEventListener('click', (event)=>
        {
            let input = modeloption3[i].querySelector('input');
            if(!input.checked)
            {
                input.checked=true;
            }
        })
    }
 