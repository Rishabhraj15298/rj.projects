const countVal = document.querySelector('#display');

const increment = () => {
    // fetching the present value
    let value = parseInt(countVal.innerText);
    // incrementing the value 
    value = value + 1;
    // displaying the updated value
    countVal.innerText = value;
};

const decrement = () => {
    let value = parseInt(countVal.innerText);
    value = value - 1;
    countVal.innerText = value;
};
