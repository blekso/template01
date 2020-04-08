class UI{
    constructor(){
        this.emailInput = document.getElementById('formEmailInput');
        this.nameInput = document.getElementById('formNameInput');
        this.messageInput = document.getElementById('formMessageInput');

        this.emailException = document.getElementById('formEmailException');
        this.nameException = document.getElementById('formNameException');
        this.messageException = document.getElementById('formMessageException');
        this.checkboxException = document.getElementById('formCheckboxException');

        this.cb1 = document.getElementById('formCheck1');
        this.cb2 = document.getElementById('formCheck2');
    }

    getInput(){
        var email = this.emailInput.value;
        var name = this.nameInput.value;
        var message = this.messageInput.value;

        const cb1Checked = this.cb1.checked;
        const cb2Checked = this.cb1.checked;
        
        if((email.search('.com') === false) || (email == '')){
            this.emailException.classList.remove('hideItem');
            this.emailException.classList.add('showItem');
            this.emailException.innerHTML = '<p>Invalid email</p>';
        }
        if(name == ''){
            this.nameException.classList.remove('hideItem');
            this.nameException.classList.add('showItem');
            this.nameException.innerHTML = '<p>Invalid name</p>';
        }
        if((message.lenght > 500) || (message == '')){
            this.messageException.classList.remove('hideItem');
            this.messageException.classList.add('showItem');
            this.messageException.innerHTML = '<p>Invalid message</p>';
        }
        if(!cb1Checked || !cb2Checked){
            this.checkboxException.classList.remove('hideItem');
            this.checkboxException.classList.add('showItem');
            this.checkboxException.innerHTML = '<p>You missed one, hehe</p>';
        }
    }
}




function main(){
    const form = document.getElementById('contactForm');

    let ui = new UI();
    form.addEventListener('submit', function(event){
        event.preventDefault();
        ui.getInput();
    });    
    
}

document.addEventListener('DOMContentLoaded', function(){
    main();
})