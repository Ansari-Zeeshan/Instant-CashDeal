
    const s1 = document.getElementById('select1');
    const s2 = document.getElementById('select2');
    const next1=document.querySelector('#next1');

    const form=document.querySelector('form');
    const next2=document.querySelector('#next2');
    const prev=document.querySelectorAll('.prev-btn');
    const myborder=document.querySelectorAll('.myborder');
    const output=document.querySelector('#demo');
    const modal=document.querySelector('#model_name');
    const nextbtn=document.querySelectorAll('.next');

    var index=0;

    for(let i = 0;i<nextbtn.length;i++)
    {
        form.addEventListener('submit', (e)=>
        {
            e.preventDefault();
        })
    }


    next1.addEventListener('click', ()=>
    {
            const yearerror=document.querySelector('#yearerror');
            const modelerror=document.querySelector('#modelerror');
            const ccerror=document.querySelector('#ccerror');
            const regiserror = document.querySelector('#regisErr');
            const regist = document.querySelector('#registration_number').value.trim();
            const registArr=regist.split('');
            let alphacheck = /^[A-Za-z]$/;
            let numcheck = /[0-9]/;

            if(regist==="")
            {
                regiserror.innerHTML="Please Enter Registration Number";
                return false;
            }
            else
            {
                regiserror.innerHTML="";
            }
            if(regist.length<4)
            {
                regiserror.innerHTML="Please Enter Valid Registration Number";
                return false;
            }
            else
            {
                 regiserror.innerHTML="";
            }
            if(alphacheck.test(registArr[0]))
            {
                regiserror.innerHTML="";
            }
            else
            {
                regiserror.innerHTML="Please Enter Valid Registration Number";
                return false;
            }
            if(numcheck.test(regist))
            {
                regiserror.innerHTML="";
            }
            else
            {
                regiserror.innerHTML="Please Enter Valid Registration Number";
                return false;
            }
            
           for(let i=0; i<selected.length;i++)
           {
               if(selected[i].innerText==='Select Bike Year')
               {
                 yearerror.innerHTML="Please Choose Bike Year";
                 return false;
               }
               else
               {
                yearerror.innerHTML="";
               }
               if(selected[i].innerText==="Please Select Bike Model")
               {
                modelerror.innerHTML="Please Choose Bike Model";
                return false;
               }
               else
               {
                modelerror.innerHTML="";
               }
               if(selected[i].innerText==="Please Select Bike CC")
               {
                ccerror.innerHTML="Please Choose Bike CC";
                return false;
               }
               else
               {
                 ccerror.innerHTML="";
               }
           }
            for(let i =0;i<myborder.length;i++)
            {
            myborder[i].classList.remove('active');
            }
            myborder[1].classList.add('active');
            // con3.style.display = 'none';
            index++;
            myborder[0].classList.add('success');
    });

    next2.addEventListener('click', ()=>
    {
       const radiovalidation1 = document.getElementsByName('condition');
        const smallradio1= document.querySelector('.smallradio1');
        const smallradio2= document.querySelector('.smallradio2');
        const smallradio3= document.querySelector('.smallradio3');
        const smallradio4= document.querySelector('.smallradio4');
        const smallradio5= document.querySelector('.smallradio5');

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
            smallradio2.innerHTML="Please Select Light Working";
        }
        else
        {
            smallradio2.innerHTML="";
        }

        const radiovalidation3 = document.getElementsByName('warranty');
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
            smallradio3.innerHTML="Please Select Engine Working";
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
            smallradio4.innerHTML="Please Select Atleast 1 option"
        }
        else
        {
            smallradio4.innerHTML="";
        }

        const radiovalidation4= document.getElementsByName('touch');
        let count5=0;
        for(let i=0;i<radiovalidation4.length;i++)
        {
            if(radiovalidation4[i].checked)
            {
                count5++;
                break;
            }
        }
        if(count5==0)
        {
            smallradio5.innerHTML="Please Select Transmission";
        }
        else
        {
            smallradio5.innerHTML="";
        }

        if(count1 && count2 && count3 && count4 && count5)
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
            myborder[index].classList.add('active');
        });    
    }
    next3.addEventListener('click', ()=>
    {
        const uname = document.querySelector('#uname').value.trim();
        const phone = document.querySelector('#phonenumber').value.trim();
        const add = document.querySelector('#address').value.trim();
        const pin = document.querySelector('#pincode').value.trim();
        const email = document.querySelector('#email').value.trim();
        const date = document.querySelector('#picker').value.trim();
        const namerror = document.querySelector('#nameerror');
        const moberror = document.querySelector('#moberror');
        const adderror = document.querySelector('#adderror');
        const pinerror = document.querySelector('#pinerror');
        const emailerror = document.querySelector('#emailerror');
        const dateerror = document.querySelector('#dateerror');
        if(uname==="")
        {
            namerror.innerHTML="Please Enter Name";
            return false;
        }
        else if(uname.length<2)
        {
            nameerror.innerHTML="Please Enter Name Atleast 2 Characters";
            return false;
        }
        else
        {
            nameerror.innerHTML="";
        }
        if(email==="")
        {
            emailerror.innerHTML="Please Enter Email ID";
            return false;
        }
        else if(!isEmail(email))
        {
            emailerror.innerHTML="Provide Valid Email";
            return false;
        }
        else
        {
            emailerror.innerHTML="";
        }
        function isEmail(emailval)
        {
           var atSymbol = emailval.indexOf('@');
           if(atSymbol<1) return false;
           var dot = emailval.lastIndexOf('.');
           if(dot<=atSymbol+2) return false;
           if(dot=== emailval.length-1) return false;
           return true;
        }
        if(phone==="")
        {
            moberror.innerHTML="Please Enter Mobile Number";
            return false;
        }
        else if(phone.length!=10)
        {
            moberror.innerHTML="Please Enter Valid Mobile Number";
            return false;
        }
        else
        {
            moberror.innerHTML="";
        }
        if(date==="")
        {
            dateerror.innerHTML="Please Choose Date";
            return false;
        }
        else
        {
            dateerror.innerHTML="";
        }
        if(add==="")
        {
            adderror.innerHTML="Please Enter Corresponding Address";
            return false;
        }
        else if(add.length<10)
        {
            adderror.innerHTML="Please Enter Address Atleast 10 characters";
            return false;
        }
        else
        {
            adderror.innerHTML="";
        }
        if(pin==="")
        {
            pinerror.innerHTML="Please Enter Pin Code";
            return false;
        }
        else if(pin.length<3)
        {
            pinerror.innerHTML="Please Enter Valid Pin Code";
            return false;
        }
        else
        {
            pinerror.innerHTML="";
        }

        myborder[2].classList.remove('active');
        myborder[2].classList.add('success');
        let formsucc = document.getElementsByClassName('myborder');
        let count = formsucc.length - 1;
        for(let i=0;i<formsucc.length;i++)
        {
            if(formsucc[i].className==='myborder success')
            {
                var sRate = 0+i;
                sendData(sRate,count);
            }
        }
    });
    function sendData(Rate,count)
    {
        let formsucc = document.getElementsByClassName('myborder');
        if(Rate===count)
        {
            location.href = 'response.html';
        }
        let radiovalidation1 = document.getElementsByName('condition');
        let radiovalidation2 = document.getElementsByName('deviceage');
        let radiovalidation3 = document.getElementsByName('touch');
        let radiovalidation4 = document.getElementsByName('warranty');
        let add = document.querySelector('#address');
        let regnum = document.querySelector('#registration_number');
        regnum.value="";
        add.value="";
        for(let i =0;i<radiovalidation1.length;i++)
        {
           radiovalidation1[i].checked=false;
           radiovalidation2[i].checked=false;
           radiovalidation3[i].checked=false;    
           radiovalidation4[i].checked=false;    
        }
        

        // for(let i = 0;i<formsucc.length;i++)
        // {
        //     if(formsucc[i].className==='myborder success')
        //     {
        //        formsucc[i].classList.remove('success');
        //     }
        // }
    }
    // select box working

    
    // select box working

    const selected = document.querySelectorAll(".selected");
    const optionsContainer = document.querySelectorAll(".options-container");
    const searchbox = document.querySelectorAll(".search-box");
    // const optlist = document.querySelectorAll('#myoption');
    
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
      for(let i=0;i<searchbox.length;i++)
      {
         const inputval = searchbox[i].querySelector('input');
         inputval.addEventListener("keyup", function(e) {
         filterList(e.target.value,i); 
         }); 
      }
       

        const filterList = (searchTerm,i) => {
          searchTerm = searchTerm.toLowerCase();
          const selectbox = searchbox[i].parentElement;
          const optionCon = selectbox.querySelector('.options-container').querySelectorAll('.option');
          Array.from(optionCon).forEach(option => {
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
        