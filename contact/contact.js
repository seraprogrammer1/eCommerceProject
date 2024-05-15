const required = document.querySelectorAll('.required');
const small_gray_p_tag = document.getElementById('small-gray-p-tag');
const large_red_p_tag = document.getElementById('large-red-p-tag');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

// gets all the form data and pushes it to an alert then reloads the page
function submit() {
    let formData = {}
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i]
        formData[input.name] = input.value;
    }
    alert(JSON.stringify(formData))
    location.reload()
}

// validates all for data then if valid push to submit functions
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let passed = true;

    // get all input and check for a value and if non changes input border and variable passed to false
    for (let i = 0; i < required.length; i++){
        const item = required[i];
        if (item.value === ''){
            item.style.border = '1px red solid'
            passed = false;
        }
        else if (item.type == 'email'){
            // regex for emails test to see if the input value matches the regex requirements
            if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(item.value)){
                item.style.border = '1px red solid'
                passed = false;
                console.log('does not match')
            }
        }
        else{
            item.style.border = 'border: 1px solid #ccc;'
        }
    }

    // change p tag if passed or not
    if (passed){
        small_gray_p_tag.style.display = 'inline';
        large_red_p_tag.style.display = 'none';
        submit();
    }
    else{
        small_gray_p_tag.style.display = 'none';
        large_red_p_tag.style.display = 'inline';
    }
})

