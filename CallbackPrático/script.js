window.onload = () => {

    function newButton(text, callback) {
    

        // $container.forEach(function (item) {
        //     const $button = document.createElement('button');
        //     $button.textContent = text;
        //     item.insertAdjacentElement('beforeend', $button);
    
        // })
    
        const $container = document.querySelector('.container');
        const $button = document.createElement('button');
        $button.textContent = text;
    
        callback($button);
    
        $container.insertAdjacentElement('beforeend', $button);
    
    
        
        
        
           
       
    
    }
    
    
    
    newButton('Login', (button) => {
        button.style.cssText = `
            font-size: 50px;
        
        `
    
        button.onclick = () => {
            alert('Parabens vc conseguiu usar o callback amigao')
        }
        
    });
    
    
    
    
    
    newButton('Cadastro', (button) => {
    
        button.style.cssText = `
            font-size: 50px;
            
        
        `
    
        button.onclick = () => {
            alert('Parabens vc conseguiu usar o callback amigao')
    
        }
    
        button.onkeydown = () => {
            button.style.cssText = `
                position: relative;
                left: 200px;
                
            `
        }

        button.onkeyup = () => {
            button.style.cssText = `
                position: relative;
                margin: 0 200px 0 0 

                transition: margin 0.5s linear;
                
            `
        }


        
    });
    

}



