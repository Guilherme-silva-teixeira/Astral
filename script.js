function verifyData()
{
    let EMAIL_USER_NAME = document.getElementById("em1").value;
    let USER_PASSWORD = document.getElementById("ps1").value;

    let EMAIL_USER_IS_NULL = `O campo do Email está vazio!!!`;
    let USER_PASSWORD_IS_NULL = `O campo da senha está vazio!!!`;

    let IS_NULL_EMAIL = document.getElementById("isNullEmail");
    let IS_NULL_PASSWORD = document.getElementById("isNullPassword");

    if(isNaN(EMAIL_USER_NAME)||EMAIL_USER_NAME=="")
    {
        IS_NULL_EMAIL.innerText += EMAIL_USER_IS_NULL;
    }
    else if (isNaN(USER_PASSWORD)||USER_PASSWORD=="")
    {
        IS_NULL_PASSWORD.innerText += USER_PASSWORD_IS_NULL;
    }
}