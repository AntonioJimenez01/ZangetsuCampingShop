function contactarWhatsapp() {
    const telefono = "522283927134";
    const mensaje = encodeURIComponent("Hola, estoy interesado en un artículo de Zangetsu Camping Shop.");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
  }
  
  const articulos = document.querySelector('.articulos');
  const totalArticulos = document.querySelectorAll('.articulo').length;
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  let index = 0;
  let intervalo;
  
  // Cambiar al artículo siguiente
  function cambiarArticulo() {
    index = (index + 1) % totalArticulos;
    actualizarSlider();
  }
  
  // Cambiar al artículo anterior
  function articuloAnterior() {
    index = (index - 1 + totalArticulos) % totalArticulos;
    actualizarSlider();
  }
  
  // Actualizar posición del slider
  function actualizarSlider() {
    articulos.style.transform = `translateX(-${index * 100}%)`;
  }
  
  // Reiniciar el intervalo automático
  function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(cambiarArticulo, 6000);
  }
  
  // Eventos de los botones
  btnNext.addEventListener('click', () => {
    cambiarArticulo();
    reiniciarIntervalo();
  });
  
  btnPrev.addEventListener('click', () => {
    articuloAnterior();
    reiniciarIntervalo();
  });
  
  // Iniciar el slider automático
  intervalo = setInterval(cambiarArticulo, 6000);
  