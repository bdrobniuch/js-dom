    let nameAlert = document.getElementById("name-alert");
    let emailAlert = document.getElementById("email-alert");
    let checkerAlert = document.getElementById("checker-alert");
    let name = document.querySelector('input[id="name"]');
    let email = document.querySelector('input[id="email"]');
    let checkbox1 = document.querySelector('input[id="zgoda-marketingowa-1"]');
    let checkbox2 = document.querySelector('input[id="zgoda-marketingowa-2"]');
    let checkbox3 = document.querySelector('input[id="wszystkie-zgody"]');

    document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
        e.preventDefault();
        nameAlert.style.display = name.value ? "none" : "block";
        emailAlert.style.display = email.value ? "none" : "block";
        checkerAlert.style.display = checkbox1.checked ? "none" : "block";
    });

    document.querySelector('input[id="wszystkie-zgody"]').addEventListener("click", function (e) {
        checkbox1.disabled = checkbox3.checked;
        checkbox2.disabled = checkbox3.checked;
        checkbox1.checked = checkbox3.checked;
        checkbox2.checked = checkbox3.checked;
    
    });
