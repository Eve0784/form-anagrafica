function formSubmit(event) {
    event.preventDefault();
    const myForm = document.getElementById('my-form');
    console.log(myForm.checkValidity());
    console.log(new FormData(myForm));

    const data = new FormData(myForm);
    console.log(data.get('name'));
}