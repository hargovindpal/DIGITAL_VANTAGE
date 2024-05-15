function emailSend() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name: " + name +
        "<br/> Email: " + email +
        "<br/> Service Type: " + service +
        "<br/> Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hargovindpal4@gmail.com",
        Password: "CBFEA3312591F0FBBD5DD14F33E1B6E2940D",
        To: "ecare@mpsjhansi.org",
        From: "digitalvantage18@gmail.com",
        Subject: "Regarding Digital Solution : Digital Vantage",
        Body: messageBody
    }).then(
        function(message) {
            if (message === 'OK') {
                swal("Successful", "Email sent successfully!", "success");
            } else {
                swal("Error", "Something went wrong!", "error"); 
            }
        }
    );
}