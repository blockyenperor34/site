function getRandomInt(max) { 
        return Math.floor(Math.random() * max);   
    }
      let rannum = getRandomInt(6);
       switch (rannum) 
       {   
        case 1:     
            document.getElementById('text1').innerText = "First time JS owo";
            break;   
        case 2:     
            document.getElementById('text1').innerText = "Hmmmm is this working?";     
            break;   
        case 3:     
            document.getElementById('text1').innerText = "I think I just broke something.......";     
            break;   
        case 4:     
            document.getElementById('text1').innerText = "What is this owo";     
            break;   
        case 5:
            document.getElementById('text1').innerText = "New domain!!!1111";
            break;
        default:     
            document.getElementById('text1').innerText = "I don't think i can finish this";    
            break; 
    }
