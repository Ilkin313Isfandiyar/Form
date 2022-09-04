let shareButton = document.querySelector('#share')
shareButton.classList.add('shareInfo')

let i=0;

function click(){
    if(!i){
        
        document.querySelector('#form').style.display = 'none'
        

        i=1;
    }

    else {
        document.querySelector('#form').style.display = 'block'

        i=0;
    }
}

shareButton.addEventListener('click',click)

