const filmes = {
  transformers: {
    titulo: "Transformers",
    info: "A franquia Transformers é um vasto universo de entretenimento focado em robôs alienígenas metamorfos do planeta Cybertron. Criada originalmente em 1984 pela empresa americana Hasbro em parceria com a japonesa Takara Tomy, a marca começou como uma linha de brinquedos e se expandiu para desenhos animados, quadrinhos e grandes produções cinematográficas.",
    trailer: "https://youtu.be/CbX_SIz_9fk?si=iBnYQXUdxTbmGtkr"
  },
  dragao: {
    titulo: "Como Treinar o Seu Dragão",
    info: "Como Treinar o Seu Dragão é uma das franquias de animação mais aclamadas da DreamWorks, baseada na série de livros da autora Cressida Cowell. A história segue Soluço, um jovem viking desajeitado que vive na ilha de Berk, onde lutar contra dragões é uma tradição. Tudo muda quando ele faz amizade com um dragão ferido, o Banguela, revelando que essas criaturas não são os monstros que todos acreditavam.",
    trailer: "https://youtu.be/HIbwgbbJzSs?si=810X64YIIYj9PD1J"
  },
  ultimoHomem: {
    titulo: "Até o Último Homem",
    info: "Até o Último Homem (Hacksaw Ridge) é um drama biográfico de guerra de 2016 que narra a história real de Desmond Doss, um médico do Exército dos EUA que serviu durante a Batalha de Okinawa na Segunda Guerra Mundial.",
    trailer: "https://youtu.be/4s4UCxCv_OE?si=27Hh40rItFX63Ct-"
  }
};

function mostrarFilme(chave) {
  const filme = filmes[chave];

  document.getElementById("tituloFilme").textContent = filme.titulo;
  document.getElementById("infoFilme").textContent = filme.info;
  document.getElementById("trailerFilme").href = filme.trailer;

  document.getElementById("destaque").classList.remove("oculto");
}

function fecharModal() {
  document.getElementById("destaque").classList.add("oculto");
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("destaque");
  if (modal && event.target === modal) {
    fecharModal();
  }
});

const form = document.getElementById("formContato");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    alert("Obrigado pela sua mensagem, " + nome + "! Entrarei em contato em breve.");
    form.reset();
  });
}
