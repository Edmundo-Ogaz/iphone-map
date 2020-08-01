/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
} from 'react-native';

import MapView, {Marker, Callout} from 'react-native-maps';
import CustomCalloutView from './Components/custom.text';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchString: '',
      region: null,
      markers: [
        { title: ",Albergue Plan Protege Calle" , description: ",Azapa, Arica, Arica y Parinacota, Chile" , coordinates: { latitude: -18.5267348 ,longitude: -70.166358 }},
{ title: ",Albergue" , description: ",Tucapel 2518, Arica, Arica y Parinacota, Chile" , coordinates: { latitude: -18.475353 ,longitude: -70.2905841 }},
{ title: ",Albergue" , description: ",Pje 11 1104, Arica, Arica y Parinacota, Chile" , coordinates: { latitude: -18.4724203 ,longitude: -70.3012499 }},
{ title: ",Albergue" , description: ",Cerro Sta Rosa 3435, Alto Hospicio, Tarapacá, Chile" , coordinates: { latitude: -20.2727157 ,longitude: -70.1042596 }},
{ title: ",Albergue" , description: ",Las Zampoñas 2205, Iquique, Tarapacá, Chile" , coordinates: { latitude: -20.2341151 ,longitude: -70.1340937 }},
{ title: ",Albergue PI" , description: ",Achao 6000, Antofagasta, Chile" , coordinates: { latitude: -23.6182822 ,longitude: -70.37931859999999 }},
{ title: ",Albergue Plan Protege" , description: ",Av. Pedro Aguirre Cerda 9479, Antofagasta, antofagasta, Chile" , coordinates: { latitude: -23.5788693 ,longitude: -70.3910356 }},
{ title: ",Albergue" , description: ",Baquedano 1139, Calama, Antofagasta, Chile" , coordinates: { latitude: -22.4528341 ,longitude: -68.9168358 }},
{ title: ",albergue Protege" , description: ",Las Brisas 6443, Copiapó, Atacama, Chile" , coordinates: { latitude: -27.4095269 ,longitude: -70.2828492 }},
{ title: ",Abergue Plan Portege Calle" , description: ",Miraflores 528, Coquimbo, coquimbo,Chile" , coordinates: { latitude: -29.9669281 ,longitude: -71.3284383 }},
{ title: ",Albergue" , description: ",Las Casas, La Serena, Coquimbo, Chile" , coordinates: { latitude: -29.9043383 ,longitude: -71.24454759999999 }},
{ title: ",Albergue" , description: ",Socos 64, Ovalle, Coquimbo, Chile" , coordinates: { latitude: -30.6000795 ,longitude: -71.2000092 }},
{ title: ",Albergue" , description: ",Carrera 1075, La Calera, Calera, Valparaíso, Chile" , coordinates: { latitude: -32.787776 ,longitude: -71.1956805 }},
{ title: ",Albergue" , description: ",Echaurren, Limache, Valparaíso, Chile" , coordinates: { latitude: -33.0036965 ,longitude: -71.2661954 }},
{ title: ",Albergue" , description: ",Presidente Doctor Salvador Allende 131, Los Andes, Valparaíso, Chile" , coordinates: { latitude: -32.8231895 ,longitude: -70.60868099999999 }},
{ title: ",Albergue" , description: ",Blanco Encalada 158, Quillota, Valparaíso, Chile" , coordinates: { latitude: -32.8788162 ,longitude: -71.2441417 }},
{ title: ",Albergue Protege" , description: ",El Retiro 752, Quilpué, Valparaíso, Chile" , coordinates: { latitude: -33.0351715 ,longitude: -71.44209219999999 }},
{ title: ",Albergue" , description: ",Ramón Ángel Jara, Quilpué, Valparaíso, Chile" , coordinates: { latitude: -33.0593822 ,longitude: -71.4022526 }},
{ title: ",Albergue" , description: ",Veintiuno de Mayo 1092, San Antonio, Valparaíso, Chile" , coordinates: { latitude: -33.591681 ,longitude: -71.6126261 }},
{ title: ",Albergue" , description: ",Abraham Ahumada 99, San Felipe, Valparaíso, Chile" , coordinates: { latitude: -32.7408771 ,longitude: -70.7208862 }},
{ title: ",Albergue" , description: ",Toro Mazote 358, San Felipe, Valparaíso, Chile" , coordinates: { latitude: -32.7544917 ,longitude: -70.7228018 }},
{ title: ",Albergue de Refuerzo" , description: ",Maria Eufrasia 1350, San Felipe, Valparaíso, Chile" , coordinates: { latitude: -32.7551405 ,longitude: -70.7194602 }},
{ title: ",Albergue Protege" , description: ",Santiago Severin 156, Valparaíso,valparaiso, Chile" , coordinates: { latitude: -33.0372575 ,longitude: -71.6327457 }},
{ title: ",Albergue" , description: ",24 Nte. 1341, Viña del Mar, Valparaíso, Chile" , coordinates: { latitude: -33.002209 ,longitude: -71.54006 }},
{ title: ",Albergue" , description: ",José Miguel Carrera 433, Buin, Región Metropolitana, Chile" , coordinates: { latitude: -33.7219328 ,longitude: -70.7431546 }},
{ title: ",Albergue" , description: ",Galo González 1523, Cerro Navia, Región Metropolitana, Chile" , coordinates: { latitude: -33.4244883 ,longitude: -70.7365324 }},
{ title: ",Albergue" , description: ",Av. Diagonal Cardenal José María Caro 1851, Conchalí, Región Metropolitana, Chile" , coordinates: { latitude: -33.3729999 ,longitude: -70.6834102 }},
{ title: ",Albergue" , description: ",San Fernando 1262, Conchalí, Región Metropolitana, Chile" , coordinates: { latitude: -33.3927164 ,longitude: -70.6611875 }},
{ title: ",Albergue C-19 Parroquia Sagrado Corazón" , description: ",Av Libertador Bernardo O'Higgins 3138, Santiago, Estación Central, Región Metropolitana, Chile" , coordinates: { latitude: -33.4511178 ,longitude: -70.678009 }},
{ title: ",Albergue de Refuerzo" , description: ",Camino Al Bosque de Santiago 491, Huechuraba, Región Metropolitana, Chile" , coordinates: { latitude: -33.3745617 ,longitude: -70.6343401 }},
{ title: ",Albergue" , description: ",Trinidad 1767, La Florida, Región Metropolitana, Chile" , coordinates: { latitude: -33.546484 ,longitude: -70.6099086 }},
{ title: ",Albergue" , description: ",Las Perdices 6987, La Florida, Región Metropolitana, Chile" , coordinates: { latitude: -33.5206246 ,longitude: -70.5470124 }},
{ title: ",Albergue" , description: ",Padre Esteban Gumucio Vives 498, La Granja, Región Metropolitana, Chile" , coordinates: { latitude: -33.520245 ,longitude: -70.62770569999999 }},
{ title: ",Albergue" , description: ",Los Plátanos 658, La Pintana, Región Metropolitana, Chile" , coordinates: { latitude: -33.6146463 ,longitude: -70.62704 }},
{ title: ",Albergue de Refuerzo" , description: ",Arrieta 551, Villa Alemana, La Reina, Región Metropolitana, Chile" , coordinates: { latitude: -33.4625483 ,longitude: -70.5604768 }},
{ title: ",Albergue" , description: ",Av. Alcalde Fernando Castillo Velasco 9770, La Reina, Región Metropolitana, Chile" , coordinates: { latitude: -33.4522539 ,longitude: -70.5310659 }},
{ title: ",Albergue" , description: ",Hogar de Cristo, Lampa, Región Metropolitana, Chile" , coordinates: { latitude: -33.2918899 ,longitude: -70.7704048 }},
{ title: ",Albergue" , description: ",Buenaventura 3906, Lo Espejo, Región Metropolitana, Chile" , coordinates: { latitude: -33.505616 ,longitude: -70.6942529 }},
{ title: ",Albergue de Refuerzo" , description: ",Los Tamarindos 5603, Lo Prado, Región Metropolitana, Chile" , coordinates: { latitude: -33.440188 ,longitude: -70.7121564 }},
{ title: ",Albergue de Refuerzo" , description: ",Nueve de Julio 5607, Lo Prado, Región Metropolitana, Chile" , coordinates: { latitude: -33.4388077 ,longitude: -70.7126187 }},
{ title: ",Albergue" , description: ",Los Canelos 831, Lo Prado, Región Metropolitana, Chile" , coordinates: { latitude: -33.4433319 ,longitude: -70.7279835 }},
{ title: ",Albergue" , description: ",Pdre Demetrio Bravo 110, Melipilla, Región Metropolitana, Chile" , coordinates: { latitude: -33.6791573 ,longitude: -71.208005 }},
{ title: ",Albergue" , description: ",José Luis Caro 200, Padre Hurtado, Región Metropolitana, Chile" , coordinates: { latitude: -33.5678475 ,longitude: -70.8171179 }},
{ title: ",Albergue de Refuerzo" , description: ",José Joaquín Prieto Vial 3391, Pedro Aguirre Cerda, Región Metropolitana, Chile" , coordinates: { latitude: -33.4827295 ,longitude: -70.6583187 }},
{ title: ",Albergue" , description: ",Av. Miraflores 1683, Penaflor, Peñaflor, Región Metropolitana, Chile" , coordinates: { latitude: -33.5997167 ,longitude: -70.8688085 }},
{ title: ",Albergue" , description: ",Cruz Almeyda 1051, Penalolen, Peñalolén, Región Metropolitana, Chile" , coordinates: { latitude: -33.4636698 ,longitude: -70.5705717 }},
{ title: ",Albergue" , description: ",Av. Quebrada de Macul 7120, Penalolen, Peñalolén, Región Metropolitana, Chile" , coordinates: { latitude: -33.5064583 ,longitude: -70.5594794 }},
{ title: ",Albergue PI (Familiar)" , description: ",Av. Ricardo Lyon 1085, Providencia, Región Metropolitana, Chile" , coordinates: { latitude: -33.4312976 ,longitude: -70.6064366 }},
{ title: ",Albergue Familias" , description: ",Tocornal Grez, Puente Alto, Región Metropolitana, Chile" , coordinates: { latitude: -33.6142375 ,longitude: -70.5784875 }},
{ title: ",Albergue" , description: ",Pedro Lagos 240, Puente Alto, Región Metropolitana, Chile" , coordinates: { latitude: -33.6113473 ,longitude: -70.5722662 }},
{ title: ",Albergue" , description: ",Sgto Menadier 276, Puente Alto, Región Metropolitana, Chile" , coordinates: { latitude: -33.6170395 ,longitude: -70.5789178 }},
{ title: ",Albergue" , description: ",Cabo 2° Job Isaías Burgos Burgos, Quilicura, Región Metropolitana, Chile" , coordinates: { latitude: -33.3664679 ,longitude: -70.7479481 }},
{ title: ",Albergue" , description: ",Aníbal Pinto 303, Quilicura, Región Metropolitana, Chile" , coordinates: { latitude: -33.3713523 ,longitude: -70.7434287 }},
{ title: ",Albergue de Refuerzo" , description: ",San Pablo 3434, Quinta Normal, Región Metropolitana, Chile" , coordinates: { latitude: -33.436512 ,longitude: -70.6816012 }},
{ title: ",Albergue" , description: ",Los Cardenales Ote. 420, Recoleta, Región Metropolitana, Chile" , coordinates: { latitude: -33.3926704 ,longitude: -70.62981169999999 }},
{ title: ",Albergue de Refuerzo" , description: ",Emiliano Zapata, Recoleta, Región Metropolitana, Chile" , coordinates: { latitude: -33.3983951 ,longitude: -70.6503934 }},
{ title: ",Albergue" , description: ",Costanera Nte., Renca, Región Metropolitana, Chile" , coordinates: { latitude: -33.4126426 ,longitude: -70.72747489999999 }},
{ title: ",Albergue" , description: ",El Cerro, Renca, Región Metropolitana, Chile" , coordinates: { latitude: -33.3991091 ,longitude: -70.7137322 }},
{ title: ",Albergue" , description: ",Condell 5200, Renca, Región Metropolitana, Chile" , coordinates: { latitude: -33.4094433 ,longitude: -70.7235086 }},
{ title: ",Albergue C-19 San Bernardo" , description: ",Sta Teresa de Tango 1877, San Bernardo, Región Metropolitana, Chile" , coordinates: { latitude: -33.6329744 ,longitude: -70.73807579999999 }},
{ title: ",Albergue" , description: ",Sta Teresa 1876, San Bernardo, Región Metropolitana, Chile" , coordinates: { latitude: -33.5902539 ,longitude: -70.6664428 }},
{ title: ",Albergue" , description: ",San Petersburgo 6120, San Miguel, Región Metropolitana, Chile" , coordinates: { latitude: -33.5134967 ,longitude: -70.6467081 }},
{ title: ",Albergue" , description: ",Salvador Sanfuentes 2363, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4501892 ,longitude: -70.6690363 }},
{ title: ",Albergue" , description: ",Rogelio Ugarte 1447, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4626938 ,longitude: -70.6336072 }},
{ title: ",Albergue" , description: ",Almirante Barroso 547, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4379474 ,longitude: -70.66242079999999 }},
{ title: ",Albergue" , description: ",Andes 3241, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4336393 ,longitude: -70.6798026 }},
{ title: ",Albergue" , description: ",Agustinas 2113, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4419053 ,longitude: -70.6658036 }},
{ title: ",Albergue" , description: ",Villavicencio, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4381842 ,longitude: -70.6393365 }},
{ title: ",Albergue C-19 Vicaría Esperanza Joven" , description: ",Moneda 1846, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4432013 ,longitude: -70.6625759 }},
{ title: ",Albergue" , description: ",Guardia Marina Ernesto Riquelme 562, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4376667 ,longitude: -70.6612207 }},
{ title: ",Albergue" , description: ",San Francisco 1440, Santiago, Región Metropolitana, Chile" , coordinates: { latitude: -33.4643803 ,longitude: -70.6444604 }},
{ title: ",Albergue" , description: ",Bellavista 509, Talagante, Región Metropolitana, Chile" , coordinates: { latitude: -33.6583116 ,longitude: -70.92635709999999 }},
{ title: ",Albergue" , description: ",Veintiuno de Mayo 1696, Talagante, Región Metropolitana, Chile" , coordinates: { latitude: -33.6723348 ,longitude: -70.9253267 }},
{ title: ",Albergue de Refuerzo" , description: ",Miraflores, Talagante, Región Metropolitana, Chile" , coordinates: { latitude: -33.64972060000001 ,longitude: -70.9278858 }},
{ title: ",Albergue" , description: ",Dos Ote 45, Huertos Familiares, Tiltil, Región Metropolitana, Chile" , coordinates: { latitude: -33.133295 ,longitude: -70.8054721 }},
{ title: ",Albergue de Refuerzo" , description: ",Antofagasta 125, Graneros, O'Higgins, Chile" , coordinates: { latitude: -23.6509279 ,longitude: -70.39750219999999 }},
{ title: ",Albergue" , description: ",Josefina Granger 12, Rancagua, O'Higgins, Chile" , coordinates: { latitude: -34.1680213 ,longitude: -70.7345176 }},
{ title: ",Albergue" , description: ",Unión Americana 729, Rancagua, O'Higgins, Chile" , coordinates: { latitude: -34.1723283 ,longitude: -70.75067419999999 }},
{ title: ",Albergue Protege" , description: ",Avenida Seminario, Requinoa, O'Higgins, Chile" , coordinates: { latitude: -34.228375 ,longitude: -70.7894082 }},
{ title: ",Albergue" , description: ",Av. Manso de Velasco, San Fernando, O'Higgins, Chile" , coordinates: { latitude: -34.581566 ,longitude: -70.9859391 }},
{ title: ",Albergue" , description: ",Carmen 981, Curicó, Maule, Chile" , coordinates: { latitude: -34.980271 ,longitude: -71.2395946 }},
{ title: ",Albergue" , description: ",Carmen 951, Curicó, Maule, Chile" , coordinates: { latitude: -34.9804802 ,longitude: -71.239502 }},
{ title: ",Albergue Plan Protege" , description: ",callejón Sarmiento, Curicó, Maule, Chile" , coordinates: { latitude: -34.997812 ,longitude: -71.24752529999999 }},
{ title: ",Albergue" , description: ",Carmen 1421, Curicó, Maule, Chile" , coordinates: { latitude: -34.9728923 ,longitude: -71.24024709999999 }},
{ title: ",Albergue" , description: ",Pdte Ibáñez 630, Linares, Maule, Chile" , coordinates: { latitude: -35.8410161 ,longitude: -71.591839 }},
{ title: ",Albergue" , description: ",Freire 461, Linares, Maule, Chile" , coordinates: { latitude: -35.8460687 ,longitude: -71.60060159999999 }},
{ title: ",Albergue Plan Protege" , description: ",3 Sur 12 1/2 Poniente, Quinta los Maquis S/N, Talca, Maule, Chile" , coordinates: { latitude: -35.4409854 ,longitude: -71.6698485 }},
{ title: ",Albergue" , description: ",Calle 1 Pte. 865, Talca, Maule, Chile" , coordinates: { latitude: -35.4296899 ,longitude: -71.66706599999999 }},
{ title: ",Cupo de Invierno" , description: ",Prat 183, Arauco, Bío Bío, Chile" , coordinates: { latitude: -37.2402014 ,longitude: -73.3229675 }},
{ title: ",Albergue" , description: ",Arturo Prat 379, Cañete, Bío Bío, Chile" , coordinates: { latitude: -37.80019679999999 ,longitude: -73.397804 }},
{ title: ",Albergue" , description: ",Cochrane 1064, Concepción, Bío Bío, Chile" , coordinates: { latitude: -36.8275485 ,longitude: -73.04339929999999 }},
{ title: ",Plan Protege Calle Covid - 19" , description: ",Trinitarias 175, Concepción, Bío Bío, Chile" , coordinates: { latitude: -36.8298903 ,longitude: -73.0485609 }},
{ title: ",Albergue" , description: ",Juan Antonio Ríos 1388, Coronel, Bío Bío, Chile" , coordinates: { latitude: -37.0028179 ,longitude: -73.165086 }},
{ title: ",Cupo de Invierno" , description: ",Colo Colo 775, Curanilahue, Bío Bío, Chile" , coordinates: { latitude: -37.4765377 ,longitude: -73.3439928 }},
{ title: ",Albergue" , description: ",18 De Septiembre, Los Alamos, Bío Bío, Chile" , coordinates: { latitude: -37.6261237 ,longitude: -73.46226639999999 }},
{ title: ",Albergue" , description: ",Bulnes 746, Los Angeles, Los Ángeles, Bío Bío, Chile" , coordinates: { latitude: -37.47401430000001 ,longitude: -72.3583283 }},
{ title: ",Albergue Plan Protege" , description: ",Almagro 124, Los Ángeles, Bío Bío, Chile" , coordinates: { latitude: -37.4722349 ,longitude: -72.3496735 }},
{ title: ",Cupo de Invierno" , description: ",Pedro Aguirre Cerda 185, Lota, Bío Bío, Chile" , coordinates: { latitude: -37.0958726 ,longitude: -73.1545268 }},
{ title: ",Albergue" , description: ",Echeverría & Alto Horno, Talcahuano, Bío Bío, Chile" , coordinates: { latitude: 32.509547 ,longitude: -116.304279 }},
{ title: ",Albergue" , description: ",España 171, Talcahuano, Bío Bío, Chile" , coordinates: { latitude: -36.7217381 ,longitude: -73.12426049999999 }},
{ title: ",Albergue" , description: ",Baquedano 621, Tome, Tomé, Bío Bío, Chile" , coordinates: { latitude: -36.6170168 ,longitude: -72.9622401 }},
{ title: ",Albergue" , description: ",Las Rosas 241, Angol, Araucanía, Chile" , coordinates: { latitude: -37.8013197 ,longitude: -72.6921359 }},
{ title: ",Albergue de Refuerzo" , description: ",Antifil 555, Temuco, Araucanía, Chile" , coordinates: { latitude: -38.7397858 ,longitude: -72.5769926 }},
{ title: ",Albergue Plan Protege" , description: ",Andrés Bello 183, Temuco, Araucanía, Chile" , coordinates: { latitude: -38.7401343 ,longitude: -72.5993948 }},
{ title: ",Albergue" , description: ",Manuel Rodriguez 1183, Villarrica, Región de la Araucanía, Chile" , coordinates: { latitude: -39.2902559 ,longitude: -72.2272263 }},
{ title: ",Albergue" , description: ",Cayetano Letelier 614, La Unión, Los Ríos, Chile" , coordinates: { latitude: -40.2964601 ,longitude: -73.0790075 }},
{ title: ",Albergue" , description: ",Camilo Henríquez 746, Valdivia, Los Ríos, Chile" , coordinates: { latitude: -39.8170527 ,longitude: -73.2449424 }},
{ title: ",Albergue Plan Protege" , description: ",Barros Arana 684, Valdivia, Los Ríos, Chile" , coordinates: { latitude: -39.8242871 ,longitude: -73.2305027 }},
{ title: ",Albergue" , description: ",Monjitas 715, Castro, Los Lagos, Chile" , coordinates: { latitude: -42.477909 ,longitude: -73.762693 }},
{ title: ",Albergue" , description: ",Guillermo Matta 433, Osorno, Los Lagos, Chile" , coordinates: { latitude: -40.5719989 ,longitude: -73.1199038 }},
{ title: ",Albergue" , description: ",Cesar Ercilla 1430, Osorno, Los Lagos, Chile" , coordinates: { latitude: -40.5843025 ,longitude: -73.1199809 }},
{ title: ",Albergue" , description: ",Cerro La Virgen, Puerto Montt, Los Lagos, Chile" , coordinates: { latitude: -41.4548186 ,longitude: -72.9498113 }},
{ title: ",Albergue Plan Protege Calle" , description: ",Los Sauces 229, Puerto Montt, Los Lagos, Chile" , coordinates: { latitude: -41.4737701 ,longitude: -72.9619472 }},
{ title: ",Albergue" , description: ",Maratón & Egaña, Puerto Montt, Los Lagos, Chile" , coordinates: { latitude: 31.7249582 ,longitude: -106.4275701 }},
{ title: ",Albergue PI" , description: ",Av. Eusebio Ibar 1130, Puerto Aysen, Aysén, Chile" , coordinates: { latitude: -45.3940718 ,longitude: -72.68925899999999 }},
{ title: ",Albergue Plan Protege" , description: ",Ogana 1150, Coyhaique, Aysén, Chile" , coordinates: { latitude: -45.5820233 ,longitude: -72.0742655 }},
{ title: ",Cupo de Invierno" , description: ",Almirante Simpson 759, Coyhaique, Aysén, Chile" , coordinates: { latitude: -45.5781851 ,longitude: -72.0667904 }},
{ title: ",Albergue" , description: ",Lanceros, Puerto Natales, Natales, Magallanes y la Antártica Chilena, Chile" , coordinates: { latitude: -51.73280519999999 ,longitude: -72.4910594 }},
{ title: ",Albergue Protege" , description: ",Uruguay 1560, Punta Arenas, Magallanes y la Antártica Chilena, Chile" , coordinates: { latitude: -53.1410279 ,longitude: -70.8813344 }},
{ title: ",Albergue" , description: ",Capitán Juan Guillermos 1171, Punta Arenas, Magallanes y la Antártica Chilena, Chile" , coordinates: { latitude: -53.1391217 ,longitude: -70.91674549999999 }},
{ title: ",Albergue" , description: ",El Roble 161, Chillan, Chillán, Región del Bío Bío, Chile" , coordinates: { latitude: -36.8225012 ,longitude: -73.0132711 }},
{ title: ",Albergue" , description: ",Libertad 336, Chillan, Chillán, Región del Bío Bío, Chile" , coordinates: { latitude: -36.6053692 ,longitude: -72.1065222 }},
{ title: ",Albergue Plan Protege Calle" , description: ",El Roble 257, Chillan, Chillán, Región del Bío Bío, Chile" , coordinates: { latitude: -36.6073391 ,longitude: -72.10847439999999 }},
{ title: ",Albergue" , description: ",Libertad 244, Chillan, Chillán, Región del Bío Bío, Chile" , coordinates: { latitude: -36.6050976 ,longitude: -72.107778 }},
{ title: ",Albergue" , description: ",Chacabuco 140, San Carlos, Bío Bío, Chile" , coordinates: { latitude: -36.4304847 ,longitude: -71.9625105}}
      ]
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        let region = {
          // latitude: position.coords.latitude,
          // longitude: position.coords.longitude,
          latitude: -33.6583116,
          longitude: -70.92635709999999,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        this.setState({ region });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  buscar = async () => {
    console.log('buscar: ' + this.state.searchString);
    let address = this.state.searchString;
    address = address.replace(' ', '+');

    // const MAP_GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json";
    // const API_KEY = "";
    // const URL = MAP_GOOGLE_API + '?address=' + address + '&key=' + API_KEY;
    const URL = "https://run.mocky.io/v3/183edb23-65fa-4954-8559-07a3905ed748";
    console.log(URL);
    try {
      let response = await fetch(URL)
      let json = await response.json();
      console.log(json);
      let region = {
        latitude: json.results[0].geometry.location.lat,
        longitude: json.results[0].geometry.location.lng,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };
      console.log(region);
      this.setState({region});
    } catch (error) {
      Alert.alert('Dirección no encontrada');
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containermap}>
          <MapView style={styles.map} region={this.state.region}>
            {this.state.markers.map((marker) => (
              <Marker
                key={marker.coordinates.latitude}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}>
                <Callout>
                  <CustomCalloutView 
                    name={'This is some custom text'}
                    address={marker.description}
                    institution={'This is some custom text'}
                    hours={'This is some custom text'}
                    places={'This is some custom text'}
                  />
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
        <View>
          <TextInput
            style={{alignItems:'center',justifyContent:'flex-start',backgroundColor:'white'}}
            value = {this.state.searchString}
            onChangeText = {(searchString) => {this.setState({searchString})}}
            placeholder = 'Search'
            keyboardType = 'web-search'
            onSubmitEditing = {()=>{this.buscar()}}
            ref = 'searchBar'
          />
        </View>
        <TouchableHighlight
          style={{alignItems: 'flex-end', justifyContent: 'center'}}
          onPress={() => {
            this.buscar();
          }}
          underlayColor="transparent">
          <View>
            <Icon name="search" size={20} color="#4285F4" />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containermap: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
