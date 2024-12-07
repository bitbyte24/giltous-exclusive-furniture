function them(){
    var bod=document.getElementById('body');
    var nav=document.getElementById('navBottom');
    var bot=document.getElementById('Bottom');
    var note=document.getElementById('note1');
    var buy=document.getElementById('order');
    var introduction=document.getElementById('intro');
    if (bod.style.backgroundColor='black') {
        bod.style.backgroundColor='white'
        nav.style.backgroundColor='grey'
        nav.style.borderColor='black'
        bot.style.color='black'
        note.style.backgroundColor='white'
        note.style.color='black'
        buy.style.color='black'
        introduction.style.color='white'
        
    } else {
        return false;
    }
}
function theme(){
    var name=document.getElementById('body');
    var nav=document.getElementById('navBottom');
    var bot=document.getElementById('Bottom');
    var note=document.getElementById('note1');
    var buy=document.getElementById('order');
    var introduction=document.getElementById('intro');
    if(name.style.backgroundColor='white'){
        name.style.backgroundColor='black'
        nav.style.backgroundColor='rgb(48, 46, 46)'
        nav.style.borderColor='black'
        bot.style.color='white'
        note.style.backgroundColor='rgb(2, 37, 9)'
        note.style.color='white'
        buy.style.color='white'
        introduction.style.color='white'
    }else{
        return false;
    }
}
function hideList(){
    var hidden=document.getElementById('productList');
    var name=document.getElementById('intro');
    hidden.style.height='0';
    name.style.opacity='';return false;
}
function produce(){
    var hidden=document.getElementById('productList');
    var name=document.getElementById('intro');
    hidden.style.height='max-Content';
    if(hidden.style.height='max-Content'){
       name.style.opacity='0.1' ;
    }
}
function showMenu(){
    var menu=document.getElementById('sideMenu');
    var name=document.getElementById('intro');
    menu.style.height='max-Content';
    if(menu.style.height='max-Content'){
        name.style.opacity='0.1' ;
     }else{
        name.style.opacity='';return false;
     }
}
function quitMenu(){
    var menu=document.getElementById('sideMenu');
    var name=document.getElementById('intro');
    menu.style.height='0';
    if(menu.style.height='0'){
        name.style.opacity='';return false;
    }
    
}
function read(){
    alert('Oops! we are sorry,\nthis content is still under review.\nyou will be notified when available.\nthank you\n\n\n..........Giltous Exclusive.........')}

    setInterval(() => {
        blink()
    }, 10000);function blink(){
        var doc=document.getElementById('logo');
        var light= doc.style.color='yellow';
        var dark=doc.style.backgroundColor='black';
        if(doc=light){
            doc=dark
        }else{return true;}
    }
    setInterval(() => {
        unBlink()
    }, 20000);function unBlink(){
        var doc=document.getElementById('logo');
        var light2= doc.style.color='black';
        var dark1=doc.style.backgroundColor='yellow';
        if(doc=light2){
            doc=dark1
        }else{return true;}
    }
    function servicesMissing(){
        alert('Oops! sorry,the services here are still under review,\nyou will be notified when available.\nthank you.\n\n\n\n..........Giltous Exclusive.........')
    }
    setInterval(() => {
        showTheme()
    }, 4000);function  showTheme(){
        var them1=document.getElementById('advise-user-about-theme');
        them1.style.height='0'
    }
    setInterval(() => {
        hideTheme()
    }, 20000);function hideTheme(){
        var them1=document.getElementById('advise-user-about-theme');
        them1.style.height='';return true;
    }
    function giveYourDesign(){
        var design=document.getElementById('choice-design');
        design.style.width='max-Content';
        design.style.height='max-Content';return true;
    }
    function quitChoiceDesign(){
        var design=document.getElementById('choice-design');
        design.style.width='0';
        design.style.height='0';return true;
    }
    function checkPicture(){
        var capturer=document.getElementById('picture');
        if(capturer.file()=null){
            capturer.style.color='red';
            setTimeout(() => {
                emptyWarning()
            }, 200);function emptyWarning(){
                alert('no file to send,please select one!')
            }
        }else{
            return true;
        }
    }
    function sendMessageToWhatsApp() {
        const phoneNumber = '+256765003100'; // Replace with the WhatsApp number, e.g., "1234567890"
        const message = "Hello umar, I found this useful. Let's talk about it.";
        
        // Encode the message for use in a URL
        const encodedMessage = encodeURIComponent(message);
        
        // Construct the WhatsApp URL with the phone number and message
        const whatsappURL = `https://wa.me/${'+256765003100'}?text=${encodedMessage}`;
        
        // Open the URL in a new tab
        window.open(whatsappURL, '_blank');
    }
    
    function buy(){
        var retVal=confirm('You have clicked a button for purchasing,confirm to continue!');
        if(retVal==true){
            document.write('alright,choose payment method');
            return true;
        }else{
            
            return false;
        }
    }
    function details(){
        var details=confirm('hello,you are opening the image details,click ok to continue')
        if(details==true){
            document.write('<h1>PRODUCT DETAILS\n\n<iframe  id="image" src="https://drive.google.com/file/d/1F6EHCZX59NF7pUdFrzjutV-khTSAD1V9/preview" height="250px" width="300px" allow="autoplay"></iframe>\n\n<button class="view" onclick="buy()">Buy</button><button onclick="backToPage()">back to list</button>')
            return true;
        }else{
            return false;
        }
    }
    function backToPage(){
        window.close();
    }
    function warn(){
        alert('Oops! the showroom is under construction.you will be notified when ready.\n\nthank you.\n\n\n\n\n...................Giltous Exclusive.............')
    }