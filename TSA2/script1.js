let boxContainer = document.querySelector('.box-container');
let currentBox = null;
let previousBox = null; 

document.querySelectorAll('.day-btn').forEach(button => {
    button.addEventListener('click', function() {
        let color = this.getAttribute('data-color');

     
        if (currentBox) {
            previousBox = currentBox; 
            previousBox.style.transform = "translate(-50%, -100px)"; 
            previousBox.style.opacity = "0"; 
            setTimeout(() => {
                previousBox.remove();
            }, 2000);
        }
        let newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.background = color;
        newBox.style.borderColor = color;
        newBox.style.transform = "translate(-50%, -150px)"; 

        boxContainer.appendChild(newBox);

        setTimeout(() => {
            newBox.style.transform = "translate(-50%, 50px)";
            newBox.style.opacity = "1";
        }, 200); 

        currentBox = newBox;
    });
});
