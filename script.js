// ~=-~-=~-=~-=~=-~-=~=-~=-~=
//      HEADER:    

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('header').forEach(header => {
      header.innerHTML = `
        <nav>
        <div class="hleft">
          <a href="index.html">
            <img src="media/img/2b.png">
          </a>
        </div>
          <ul>
            <li class="devs">
                <a href="#">Devs</a>
                <ul>
                    <li><a href="#">Pesco</a></li>
                    <li><a href="#">Billy</a></li>
                </ul>
            </li>
            <li><a href="#">$progs</a></li>
            <li><a href="#">$projetos</a></li>
          </ul>
          <div class="hright">
            <a href="#">Conversar</a>
          </div>
        </nav>
      `;
    });
  });

//´-=´~-=-~´=-´=--=~=-~´-=~´-=-~=-~=-´~-=-´~

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // impede o comportamento padrão
    alert("Este link ainda não está disponível!");
  });
});



//´-=´~-=-~´=-´=--=~=-~´-=~´-=-~=-~=-´~-=-´~
//      FOOTER  :

document.addEventListener('DOMContentLoaded', () => {

    let basePath = '';
    const depth = window.location.pathname.split('/').length - 2;
    for (let i = 0; i < depth; i++) {
      basePath += '../';
    }
    document.querySelectorAll('footer').forEach(footer => {
      footer.innerHTML = `
        <div class="pdesc">
          <p class="pname">Projetinho dos Gurís &REG;</p>
          <div class="flinks">
            <a href="mailto:loscornoshermanos@gmail.com" id="mailto">
              <img src="media/img/mailto.png" class="imgft4">
            </a>
          </div>
        </div>
        <div class="footer">
          <div class="lay">
            <div>
              <img src="media/img/sci.png" class="imgft1">
            </div>
            <div>
              <img src="media/img/ars.png" class="imgft2">
            </div>
            <div>
              <img src="media/img/dmae.png" class="imgft3">
            </div>
          </div>
        </div>
      `;
    });
  });
  




// imagens footer
    document.querySelector('.imgft1').src = 'media/img/sci.png';
    document.querySelector('.imgft2').src = 'media/img/ars.png';
    document.querySelector('.imgft3').src = 'media/img/dmae.png';
    document.querySelector('.imgft4').src = 'media/img/mailto.png';
    //document.getElementById("mailto").href = "mailto:loscornoshermanos@gmail.com"

// imagens para subpastas (pesco)
    document.querySelector('.imgft1').src = '../../../media/img/sci.png';
    document.querySelector('.imgft2').src = '../../../media/img/ars.png';
    document.querySelector('.imgft3').src = '../../../media/img/dmae.png';
    document.querySelector('.imgft4').src = '../../../media/img/mailto.png';
// ========

    document.querySelector('.pname').innerHTML = 'Projetinho dos Gurís &reg';

// ==================== FOOTER ===========



