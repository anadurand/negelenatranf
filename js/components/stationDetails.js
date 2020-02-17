'use strict';
const stationDetail = (update) => {
  const parent = $('<div class="station-detail"></div>');
  const h2 = $('<h2 class="name-station">'+ state.selectedStation.producto + '</h2>');
  const hr = $('<hr>');
  const pAddress = $('<p class="direccion">Unidad:' + state.selectedStation.unidad + '</p>');
  const pDecena = $('<p class="direccion">Denena:' + state.selectedStation.decena + '</p>');
  const pDocena = $('<p class="direccion">Docena:' + state.selectedStation.docena + '</p>');
  const pCiento = $('<p class="direccion">Ciento:' + state.selectedStation.ciento + '</p>');
  const pGruesa = $('<p class="direccion">Gruesa:' + state.selectedStation.gruesa + '</p>');
  const pMillar = $('<p class="direccion">Millar:' + state.selectedStation.millar + '</p>');
  const pCaja = $('<p class="direccion">Caja:' + state.selectedStation.caja + '</p>');


  
  parent.append(h2);
  parent.append(hr);
  parent.append(pAddress);
  parent.append(pDecena);
  parent.append(pDocena);
  parent.append(pCiento);
  parent.append(pGruesa);
  parent.append(pMillar);
  parent.append(pCaja);
  return parent;
}
