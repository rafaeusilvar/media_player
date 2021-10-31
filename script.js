let musicas = [
  {titulo:'Company', artista:'Justin Bieber', src:'musicas/Company.mp3', img:'https://www.vagalume.com.br/justin-bieber/discografia/purpose.jpg'},
  {titulo:'SICKO MODE', artista:'Travis Scott', src:'musicas/Travis Scott - SICKO MODE (Audio).mp3', img:'https://www.vagalume.com.br/travis-scott/discografia/astroworld.jpg'},
  {titulo:'Suit & Tie', artista:'Justin Timberlake', src:'musicas/Justin Timberlake - Suit & Tie (Official Video - Explicit) ft. Jay-Z.mp3', img:'http://3.bp.blogspot.com/-5iGUQ_LlMdY/UVF3LKRLXyI/AAAAAAAAU-g/nkmKt8cqkYA/s1600/The_20_20_Experience_(Deluxe_Version).jpg'},
  {titulo:'777-666', artista:'Matuê', src:'musicas/Matuê - 777-666.mp3', img:'https://www.vagalume.com.br/matue/discografia/maquina-do-tempo-11.jpg'},
  {titulo:'Wonderwall', artista:'Oasis', src:'musicas/Oasis-Wonderwall.mp3', img:'http://crownnote.com/sites/default/files/styles/album_artwork__300x300_/public/imgres_0.jpg?itok=Rm86sjlZ'},
  {titulo:'Smells Like Teen Spirit', artista:'Nirvana', src:'musicas/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3', img:'https://regards.com.br/wp-content/uploads/2005/09/cd-nirvana-nevermind-nirvana-nevermind-00602527779089-2660252777908-300x300.jpg'},
  {titulo:'Uprising', artista:'Muse', src:'musicas/Muse - Uprising [Official Video].mp3', img:'https://i.pinimg.com/474x/f9/ce/09/f9ce09fcb1b8d6ce477582b81372eef9--best-album-covers-band-of.jpg'},
  {titulo:'Passionfruit', artista:'Drake', src:'musicas/Drake - Passionfruit.mp3', img:'https://img.discogs.com/67AvKTmfkpr4K5UcJK87el7mQ_g=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9999158-1538155037-8069.jpeg.jpg'},
  {titulo:'Its Time', artista:'Imagine Dragons', src:'musicas/Imagine Dragons - Its Time.mp3', img:'https://upload.wikimedia.org/wikipedia/pt/3/3f/Night_Visions_Album_Cover.jpeg'},
  {titulo:'New Light', artista:'John Mayer', src:'musicas/John Mayer - New Light (Official Audio).mp3', img:'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F840d3c8f34935e887790002123cefd0b.1000x1000x1.jpg'},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
  // {titulo:'', artista:'', src:'', img:''},
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('.capa-musica');
let nomeMusica = document.querySelector('.texto h2');
let nomeArtista = document.querySelector('.texto i');

renderizarMusica(indexMusica);

//Eventos

document.querySelector('.play-1').addEventListener('click', tocarMusica);
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
document.querySelector('.botao-pause-2').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
indexMusica--;
if (indexMusica <0){
    indexMusica = 0;
}
renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
indexMusica++;
if (indexMusica > (musicas.length - 1)){
    indexMusica = 0;
}
renderizarMusica(indexMusica);
});

//Funcoes
function renderizarMusica(index){
  musica.setAttribute('src', musicas[index].src);
  musica.addEventListener('loadeddata', () => {
      nomeMusica.textContent = musicas[index].titulo;
      nomeArtista.textContent = musicas[index].artista;
      imagem.src = musicas[index].img;
      duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
  });
}

function tocarMusica(){
  musica.play();
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
  musica.pause();
  document.querySelector('.botao-pause').style.display = 'none';
  document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
  let barra = document.querySelector('progress');
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent = segundosParaMinutos (Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
  let campoMinutos = Math.floor(segundos/ 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos <10){
      campoSegundos = '0' + campoSegundos;
  }

  return campoMinutos+':'+campoSegundos; 
}

