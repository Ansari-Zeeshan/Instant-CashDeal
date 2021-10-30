  
    const counters=document.querySelectorAll('.counter');
    const speed=500;

    counters.forEach(counter=>
    {
        function updatecounter()
        {
            const target = +counter.getAttribute('data-target');
            // console.log(typeof target);
            const count = +counter.innerText;
            const inc = target/speed;
            // console.log(inc);
            if(count<target)
            {
                counter.innerText=Math.ceil(count+inc);
                setTimeout(updatecounter,1);
            }
            else
            {
                count.innerText=target;
            }
        }
        updatecounter();
    })
    
    let ptext = document.querySelector('.banner .carousel-inner .carousel-content p');
    console.log(ptext);
    let pstr="Interested in selling your Mobile! Please click below link to sell your old device";
    function appear()
    {
        let psplit = pstr.split("");
        console.log(psplit);
        let i =0;
          setInterval( function()
              { 
                  if(i<psplit.length)
                  {
                      ptext= ptext + psplit[i];
                      ptext.innerHTML=ptext;
                  }
                  i++;
              },100);
    }
    appear();
    
    const modal=document.querySelector('.intro-section .my_modal');
    const modalbtn=document.querySelector('.intro-section #mymodalbtn');
    const closemodal=document.querySelector('.intro-section .my_modal .closebtn');
    
    modalbtn.addEventListener('click', ()=>
    {
        modal.style.display = 'block';
    });

    closemodal.addEventListener('click', ()=>
    {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e)=>
    {
        if(e.target==modal)
        {
            modal.style.display = 'none';
        }
    })

    const form=document.querySelector('.intro-section form');
    const name=document.querySelector('.intro-section #name');
    const email=document.querySelector('.intro-section #email');
    const phone=document.querySelector('.intro-section #phone');
    const textarea=document.querySelector('.intro-section #textarea');

    form.addEventListener('submit', (e)=>
    {
        e.preventDefault();
        validate()
    })

    const sendData=(rate,count)=>
    {
        if (rate===count) 
        {
            let formsucc=document.getElementsByClassName('form-control2'); 
            alert('Hurray your response recorded');
            // location.href=`demo.html`;
            name.value="";
            email.value="";
            phone.value="";
            textarea.value="";
            for(let i = 0;i<formsucc.length;i++)
            {
                if(formsucc[i].className==='form-control2 success')
                {
                   formsucc[i].classList.remove('success');
                }
            }
            modal.style.display = 'none';
        }
    }
    const  successMsg=()=>
    {
        let formsucc=document.getElementsByClassName('form-control2'); 
        var count = formsucc.length - 1;
        for(let i=0;i<formsucc.length;i++)
        {
            if(formsucc[i].className==='form-control2 success')
            {
                var sRate = 0+i;
                sendData(sRate,count);
            }
            else
            {
                return false;
            }
        }
    }

    function validate()
    {
        let nameval = name.value.trim();
        let emailval = email.value.trim();
        let phoneval = phone.value.trim();
        let textareaval = textarea.value.trim();

        if (nameval.length<2) 
        {
            setErrorMsg(name,'Name should be min of 2 characters');
        }
        else
        {
            setSuccessMsg(name);
        }

        if(!isEmail(emailval))
        {
            setErrorMsg(email,"Provide Valid Email");
        }

        else
        {
            setSuccessMsg(email);
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

        if(phoneval.length!=10)
        {
            setErrorMsg(phone,"Not a valid mobile number");
        }
        else
        {
            setSuccessMsg(phone);
        }
        if(textareaval.length<10)
        {
            setErrorMsg(textarea,"Please type atleast 10 characters")
        }
        else
        {
            setSuccessMsg(textarea);
        }
        successMsg();

        function setErrorMsg(input,errormsg)
        {
            const formCon=input.parentElement;
            const small = formCon.querySelector('small');
            small.innerText=errormsg;
        }
        function setSuccessMsg(input)
        {
            const formCon=input.parentElement;
            const small = formCon.querySelector('small');
            formCon.className="form-control2 success";
            small.innerText="";
        }
    }
   