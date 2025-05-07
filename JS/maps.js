function redirMaps() {
    const origem = encodeURIComponent(document.getElementById("pontoA").value);
    const destino = encodeURIComponent(document.getElementById("pontoB").value);
  
    if (!origem || !destino) {
      alert("Por favor, preencha os dois endereços.");
      return;
    }
  
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}&travelmode=driving`;
  
    const linkMapa = document.getElementById("linkMapa");
    linkMapa.href = url;
    linkMapa.style.display = "inline-block";
  
    // display botão
    document.getElementById("botaoGerar").style.display = "none";
  }