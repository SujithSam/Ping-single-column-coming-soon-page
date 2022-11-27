const form=document.getElementById('form');

form.addEventListener('submit',e=>
{
    e.preventDefault();

    //check for email validation
    const email= form['email'];
    const emailValue= email.value;
    const small = form.querySelector('small');
    if(!emailValue)
    {
       email.classList.add('error');
       small.innerText = 'Email failed cannot be blank!';
       small.style.display = 'inline-block';
        //say it's empty
    }
    else if(!isValidEmail(emailValue))
    {
        email.classList.add('error');
        small.innerText = 'Email is Invalid!';
        small.style.display = 'inline-block';
//say it's invalid
    }
    else{
        email.classList.remove('error');
        small.innerText = '';
        small.style.display = 'none';
        //submit
    }
});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}