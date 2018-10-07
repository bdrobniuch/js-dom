




document.querySelector('input[type="submit"]').addEventListener("click", function(e) {
       e.preventDefault()
    console.log(document.querySelector('input[name="fname"]').value, document.querySelector('input[name="lname"]').value);
});