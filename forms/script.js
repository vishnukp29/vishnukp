function sendMail(params){
    let msg={
        from_name:document.getElementById("name").value,
        from_email:document.getElementById("email").value,
        suubject:document.getElementById("subject").value,
        message:document.getElementById("message").value
    };
    emailjs.send("service_xfrrvvs","template_kohvfol", msg).then((res)=>{
        console.log(alert("Message Send Success"));
        document.getElementById("name")="",
        document.getElementById("email")="",
        document.getElementById("subject")="",
        document.getElementById("message")=""
    });
}