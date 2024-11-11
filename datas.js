const imagensDeFundo = [
    'url("images/slide1.png")',
    'url("images/slide2.png")',
    'url("images/slide3.png")' 
];

function alterarFundo()
{
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const posicaoRolagem = window.scrollY;
    let indiceImagem = Math.floor((posicaoRolagem / alturaTotal) * imagensDeFundo.length);
    indiceImagem = Math.min(indiceImagem, imagensDeFundo.length - 1);
    let slidepage = document.getElementById("images");
    if (slidepage)
        {
        slidepage.style.backgroundImage = imagensDeFundo[indiceImagem];
        slidepage.style.backgroundSize = "cover"; 
        slidepage.style.transition = "background-image 0.5s ease-in-out";
        if (indiceImagem === 1)
            {
            slidepage.style.marginLeft = "0vh";
            slidepage.style.transition = "1.5s ease";
        }
        else
        {
            slidepage.style.marginLeft = "5vh";
            slidepage.style.transition = "1.5s ease";
        }
    }
}
window.addEventListener('scroll', alterarFundo);
