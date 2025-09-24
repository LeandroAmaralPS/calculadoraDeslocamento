//localização atual como origem
function usarMinhaLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latidude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // latitude,longitude
        document.getElementById("pontoA").value = `${latidude},${longitude}`;
      },
      (error) => {
        alert("Não foi possível obter sua localização.");
        console.error(error);
      }
    );
  } else {
    alert("Geolocalização não é suportada no seu navegador.");
  }
}

//gerar o link do Google Maps
function redirMaps() {
  const origem = encodeURIComponent(document.getElementById("pontoA").value);
  const destino = encodeURIComponent(document.getElementById("pontoB").value);

  /*if (!origem || !destino) {
    alert("Por favor, preencha os dois endereços.");
    return;
  }*/
  if(origem === ""){
    alert("O endereço de origem não pode estar vazio. Por favor, insira um endereço válido.");
    return;
  }else{
    if(origem === destino){
      alert("Os endereços de origem e destino não podem ser iguais. Por favor, insira endereços diferentes.");
      return;
    }
  }
  if(origem && !destino){
    alert("O endereço de destino não pode estar vazio. Por favor, insira o endereço.");
    return;
  }

  const url = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}&travelmode=driving`;

  const linkMapa = document.getElementById("linkMapa");
  linkMapa.href = url;
  linkMapa.style.display = "inline-block";

// Oculta o botão "Mostrar rota"
  document.getElementById("botaoGerar").style.display = "none";
}
//botão endereço simix
function redirMapsOrigemFixa() {
  const enderecoFixo = "Avenida Santos Ferreira 1455 - Canoas - RS";
  document.getElementById("pontoA").value = enderecoFixo; // Preenche no campo origem

  const origem = encodeURIComponent(enderecoFixo);
  const destino = encodeURIComponent(document.getElementById("pontoB").value);
  if(origem){
    alert("Endereço de origem preenchido! Agora, por favor, insira o endereço de destino.");
    return;
  }
  const url = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}&travelmode=driving`;

  const linkMapa = document.getElementById("linkMapa");
  linkMapa.href = url;
  linkMapa.style.display = "inline-block";
//oculta botão do endereço símix
  document.getElementById("botaoGerarFixo").style.display = "none";
}