ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32632").setExtent([380403.059375, 5050328.137500, 397205.159375, 5060129.362500]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParcoMontAvic_2 = new ol.format.GeoJSON();
var features_ParcoMontAvic_2 = format_ParcoMontAvic_2.readFeatures(json_ParcoMontAvic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_ParcoMontAvic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcoMontAvic_2.addFeatures(features_ParcoMontAvic_2);
var lyr_ParcoMontAvic_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcoMontAvic_2, 
                style: style_ParcoMontAvic_2,
                popuplayertitle: 'Parco Mont Avic',
                interactive: false,  // 🔥 BLOCCA selezione
                title: '<img src="styles/legend/ParcoMontAvic_2.png" /> Parco Mont Avic'
            });
var format_PercorsiescursionisticiMontAvic_3 = new ol.format.GeoJSON();
var features_PercorsiescursionisticiMontAvic_3 = format_PercorsiescursionisticiMontAvic_3.readFeatures(json_PercorsiescursionisticiMontAvic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_PercorsiescursionisticiMontAvic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercorsiescursionisticiMontAvic_3.addFeatures(features_PercorsiescursionisticiMontAvic_3);
var lyr_PercorsiescursionisticiMontAvic_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PercorsiescursionisticiMontAvic_3, 
                style: style_PercorsiescursionisticiMontAvic_3,
                popuplayertitle: 'Percorsi escursionistici Mont Avic',
                interactive: true,
    title: 'Percorsi escursionistici Mont Avic<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_0.png" /> Champdepraz - Col Medzove<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_1.png" /> Chapy - Lago Raty<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_2.png" /> Chardonney - Dondena<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_3.png" /> Chevrère - Lac Gelé<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_4.png" /> Chevrère - Rifugio Barbustel<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_5.png" /> Col Fussy - Col Medzove<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_6.png" /> Dondena - Bese - Lac Miserin<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_7.png" /> Dondena - Col Fenêtre (7B)<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_8.png" /> Dondena - Col Fenêtre (Alta Via 2)<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_9.png" /> Dondena - Col Moussaillon<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_10.png" /> Dondena - Col Pontonnet (7C)<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_11.png" /> Dondena - Col Pontonnet (8)<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_12.png" /> Dondena - Monte Glacier<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_13.png" /> Dondena -Lago Miserin<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_14.png" /> Mont Blanc - Col de la Croix - Col Cima Piana<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_15.png" /> Mont Blanc - Col du Lac Blanc<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_16.png" /> Mont Blanc - Dondena<br />\
    <img src="styles/legend/PercorsiescursionisticiMontAvic_3_17.png" /> Tour dei Laghi di Champorcher<br />' });
var format_Puntodiarrivo_4 = new ol.format.GeoJSON();
var features_Puntodiarrivo_4 = format_Puntodiarrivo_4.readFeatures(json_Puntodiarrivo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Puntodiarrivo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntodiarrivo_4.addFeatures(features_Puntodiarrivo_4);
var lyr_Puntodiarrivo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntodiarrivo_4, 
                style: style_Puntodiarrivo_4,
                popuplayertitle: 'Punto di arrivo',
                interactive: true,
                title: '<img src="styles/legend/Puntodiarrivo_4.png" /> Punto di arrivo'
            });
var format_Puntodipartenza_5 = new ol.format.GeoJSON();
var features_Puntodipartenza_5 = format_Puntodipartenza_5.readFeatures(json_Puntodipartenza_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Puntodipartenza_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntodipartenza_5.addFeatures(features_Puntodipartenza_5);
var lyr_Puntodipartenza_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntodipartenza_5, 
                style: style_Puntodipartenza_5,
                popuplayertitle: 'Punto di partenza',
                interactive: true,
                title: '<img src="styles/legend/Puntodipartenza_5.png" /> Punto di partenza'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ParcoMontAvic_2.setVisible(true);lyr_PercorsiescursionisticiMontAvic_3.setVisible(true);lyr_Puntodiarrivo_4.setVisible(true);lyr_Puntodipartenza_5.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleSatellite_1,lyr_ParcoMontAvic_2,lyr_PercorsiescursionisticiMontAvic_3,lyr_Puntodiarrivo_4,lyr_Puntodipartenza_5];
lyr_ParcoMontAvic_2.set('fieldAliases', {'fid': 'fid', 'codice': 'codice', 'Tipo sito': 'Tipo sito', 'Denominazione': 'Denominazione', 'Regione': 'Regione', 'Area (kmq)': 'Area (kmq)', 'Perimetro': 'Perimetro', 'Ettari': 'Ettari', });
lyr_PercorsiescursionisticiMontAvic_3.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Difficoltà': 'Difficoltà', 'Segnavia': 'Segnavia', 'Lunghezza percorso (km)': 'Lunghezza percorso (km)', 'Dislivello in salita (m)': 'Dislivello in salita (m)', 'Tempo di salita (h)': 'Tempo di salita (h)', 'Luogo di partenza': 'Luogo di partenza', 'Luogo di arrivo': 'Luogo di arrivo', 'URL': 'URL', });
lyr_Puntodiarrivo_4.set('fieldAliases', {'fid': 'fid', 'Luogo di arrivo': 'Luogo di arrivo', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Puntodipartenza_5.set('fieldAliases', {'fid': 'fid', 'Luogo di partenza': 'Luogo di partenza', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_ParcoMontAvic_2.set('fieldImages', {'fid': 'Range', 'codice': 'TextEdit', 'Tipo sito': 'TextEdit', 'Denominazione': 'TextEdit', 'Regione': 'TextEdit', 'Area (kmq)': 'TextEdit', 'Perimetro': 'TextEdit', 'Ettari': 'TextEdit', });
lyr_PercorsiescursionisticiMontAvic_3.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Difficoltà': 'TextEdit', 'Segnavia': 'TextEdit', 'Lunghezza percorso (km)': 'TextEdit', 'Dislivello in salita (m)': 'TextEdit', 'Tempo di salita (h)': 'TextEdit', 'Luogo di partenza': 'TextEdit', 'Luogo di arrivo': 'TextEdit', 'URL': 'TextEdit', });
lyr_Puntodiarrivo_4.set('fieldImages', {'fid': 'Range', 'Luogo di arrivo': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Puntodipartenza_5.set('fieldImages', {'fid': 'Range', 'Luogo di partenza': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_ParcoMontAvic_2.set('fieldLabels', {'fid': 'hidden field', 'codice': 'hidden field', 'Tipo sito': 'hidden field', 'Denominazione': 'inline label - always visible', 'Regione': 'hidden field', 'Area (kmq)': 'inline label - always visible', 'Perimetro': 'hidden field', 'Ettari': 'hidden field', });
lyr_PercorsiescursionisticiMontAvic_3.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - always visible', 'Difficoltà': 'inline label - always visible', 'Segnavia': 'inline label - always visible', 'Lunghezza percorso (km)': 'inline label - always visible', 'Dislivello in salita (m)': 'inline label - always visible', 'Tempo di salita (h)': 'inline label - always visible', 'Luogo di partenza': 'inline label - always visible', 'Luogo di arrivo': 'inline label - always visible', 'URL': 'header label - always visible', });
lyr_Puntodiarrivo_4.set('fieldLabels', {'fid': 'hidden field', 'Luogo di arrivo': 'header label - always visible', });
lyr_Puntodipartenza_5.set('fieldLabels', {'fid': 'hidden field', 'Luogo di partenza': 'header label - always visible', });
lyr_Puntodipartenza_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
    
});