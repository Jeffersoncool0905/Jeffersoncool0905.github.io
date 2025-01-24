
function opentab(tabname) {
    const tablinks = document.getElementsByClassName('tab-links');
    const tabcontents = document.getElementsByClassName('tab-contents');

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('tab-activate');
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove('block-activate');
    }

    document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`).classList.add('tab-activate');
    document.getElementById(tabname).classList.add('block-activate');
}

function toggleColorPicker() {
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.style.display = colorOptions.style.display === 'block' ? 'none' : 'block';
}

function changeColors(leftColor, rightColor, textColor) {
    const leftSection = document.querySelector('.container-left');
    const rightSection = document.querySelector('.container-right');
    const name = document.querySelector('.name');
    const course = document.querySelector('.course');
    const infoItems = document.querySelectorAll('.info-item p');
    const skillTexts = document.querySelectorAll('.skill p');

    leftSection.style.backgroundColor = leftColor;
    rightSection.style.backgroundColor = rightColor;
    name.style.color = textColor;
    course.style.color = textColor;
    infoItems.forEach(item => item.style.color = textColor);
    skillTexts.forEach(skill => skill.style.color = textColor);
}
