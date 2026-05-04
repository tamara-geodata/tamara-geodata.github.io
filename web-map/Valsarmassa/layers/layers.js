var wms_layers = [];

var lyr_MDT_Piemonte_20m_maschera_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MDT_Piemonte_20m_maschera<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MDT_Piemonte_20m_maschera_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [731292.314126, 5472176.358600, 1026442.884416, 5855254.970343]
        })
    });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.648000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SfondoCartograficoRegionePiemonte_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geomap.reteunitaria.piemonte.it/mapproxy/service?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "rp_CTR_raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sfondo Cartografico Regione Piemonte',
                            popuplayertitle: 'Sfondo Cartografico Regione Piemonte',
                            opacity: 0.691000,
                            
                            
                          });
              wms_layers.push([lyr_SfondoCartograficoRegionePiemonte_2, 0]);
var format_RiservaNaturaleValSarmassaAT_3 = new ol.format.GeoJSON();
var features_RiservaNaturaleValSarmassaAT_3 = format_RiservaNaturaleValSarmassaAT_3.readFeatures(json_RiservaNaturaleValSarmassaAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiservaNaturaleValSarmassaAT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiservaNaturaleValSarmassaAT_3.addFeatures(features_RiservaNaturaleValSarmassaAT_3);
var lyr_RiservaNaturaleValSarmassaAT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiservaNaturaleValSarmassaAT_3, 
                style: style_RiservaNaturaleValSarmassaAT_3,
                popuplayertitle: 'Riserva Naturale Val Sarmassa (AT)',
                interactive: false,
                title: '<img src="styles/legend/RiservaNaturaleValSarmassaAT_3.png" /> Riserva Naturale Val Sarmassa (AT)'
            });
var format_Comuni_Piemonte_4 = new ol.format.GeoJSON();
var features_Comuni_Piemonte_4 = format_Comuni_Piemonte_4.readFeatures(json_Comuni_Piemonte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuni_Piemonte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_Piemonte_4.addFeatures(features_Comuni_Piemonte_4);
var lyr_Comuni_Piemonte_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuni_Piemonte_4, 
                style: style_Comuni_Piemonte_4,
                popuplayertitle: 'Comuni_Piemonte',
                interactive: false,
                title: '<img src="styles/legend/Comuni_Piemonte_4.png" /> Comuni_Piemonte'
            });
var format_PercorsiRiservaNaturaleValSarmassa_5 = new ol.format.GeoJSON();
var features_PercorsiRiservaNaturaleValSarmassa_5 = format_PercorsiRiservaNaturaleValSarmassa_5.readFeatures(json_PercorsiRiservaNaturaleValSarmassa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercorsiRiservaNaturaleValSarmassa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercorsiRiservaNaturaleValSarmassa_5.addFeatures(features_PercorsiRiservaNaturaleValSarmassa_5);
var lyr_PercorsiRiservaNaturaleValSarmassa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PercorsiRiservaNaturaleValSarmassa_5, 
                style: style_PercorsiRiservaNaturaleValSarmassa_5,
                popuplayertitle: 'Percorsi Riserva Naturale Val Sarmassa',
                interactive: true,
    title: 'Percorsi Riserva Naturale Val Sarmassa<br />\
    <img src="styles/legend/PercorsiRiservaNaturaleValSarmassa_5_0.png" /> P1 Anello dei tre Comuni<br />\
    <img src="styles/legend/PercorsiRiservaNaturaleValSarmassa_5_1.png" /> P2 Anello del Laghetto<br />\
    <img src="styles/legend/PercorsiRiservaNaturaleValSarmassa_5_2.png" /> P3 Anello dei Saraceni<br />\
    <img src="styles/legend/PercorsiRiservaNaturaleValSarmassa_5_3.png" /> P4 Anello della Serra<br />\
    <img src="styles/legend/PercorsiRiservaNaturaleValSarmassa_5_4.png" /> P5 Anello della Ru<br />\
    <img src="styles/legend/PercorsiRiservaNaturaleValSarmassa_5_5.png" /> P6 Anello dei Fossili<br />' });
var group_Limitiamministrativi = new ol.layer.Group({
                                layers: [lyr_Comuni_Piemonte_4,],
                                fold: 'open',
                                title: 'Limiti amministrativi'});

lyr_MDT_Piemonte_20m_maschera_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SfondoCartograficoRegionePiemonte_2.setVisible(true);lyr_RiservaNaturaleValSarmassaAT_3.setVisible(true);lyr_Comuni_Piemonte_4.setVisible(true);lyr_PercorsiRiservaNaturaleValSarmassa_5.setVisible(true);
var layersList = [lyr_MDT_Piemonte_20m_maschera_0,lyr_OSMStandard_1,lyr_SfondoCartograficoRegionePiemonte_2,lyr_RiservaNaturaleValSarmassaAT_3,group_Limitiamministrativi,lyr_PercorsiRiservaNaturaleValSarmassa_5];
lyr_RiservaNaturaleValSarmassaAT_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome_parco': 'nome_parco', 'localita': 'localita', 'nome_ente': 'nome_ente', 'cod_parco': 'cod_parco', 'tipologia_': 'tipologia_', 'anno_istit': 'anno_istit', 'area_Kmq': 'area_Kmq', 'perimetro': 'perimetro', 'url_geopor': 'url_geopor', 'url_region': 'url_region', 'aggiorname': 'aggiorname', });
lyr_Comuni_Piemonte_4.set('fieldAliases', {'fid': 'fid', 'rip_code': 'rip_code', 'rip_name': 'rip_name', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'com_code': 'com_code', 'com_name': 'com_name', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_PercorsiRiservaNaturaleValSarmassa_5.set('fieldAliases', {'fid': 'fid', 'Lunghezza': 'Lunghezza', 'Percorso': 'Percorso', 'Nome': 'Nome', 'cod_percorso': 'cod_percorso', });
lyr_RiservaNaturaleValSarmassaAT_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome_parco': 'TextEdit', 'localita': 'TextEdit', 'nome_ente': 'TextEdit', 'cod_parco': 'TextEdit', 'tipologia_': 'TextEdit', 'anno_istit': 'TextEdit', 'area_Kmq': 'TextEdit', 'perimetro': 'TextEdit', 'url_geopor': 'TextEdit', 'url_region': 'TextEdit', 'aggiorname': 'TextEdit', });
lyr_Comuni_Piemonte_4.set('fieldImages', {'fid': '', 'rip_code': '', 'rip_name': '', 'reg_code': '', 'reg_name': '', 'prov_code': '', 'prov_name': '', 'com_code': '', 'com_name': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_PercorsiRiservaNaturaleValSarmassa_5.set('fieldImages', {'fid': 'TextEdit', 'Lunghezza': 'TextEdit', 'Percorso': 'TextEdit', 'Nome': 'TextEdit', 'cod_percorso': 'TextEdit', });
lyr_RiservaNaturaleValSarmassaAT_3.set('fieldLabels', {'fid': 'header label - always visible', 'id': 'header label - always visible', 'nome_parco': 'header label - always visible', 'localita': 'header label - always visible', 'nome_ente': 'header label - always visible', 'cod_parco': 'header label - always visible', 'tipologia_': 'header label - always visible', 'anno_istit': 'header label - always visible', 'area_Kmq': 'header label - always visible', 'perimetro': 'header label - always visible', 'url_geopor': 'no label', 'url_region': 'no label', 'aggiorname': 'inline label - always visible', });
lyr_Comuni_Piemonte_4.set('fieldLabels', {'fid': 'header label - always visible', 'rip_code': 'header label - always visible', 'rip_name': 'header label - always visible', 'reg_code': 'header label - always visible', 'reg_name': 'header label - always visible', 'prov_code': 'header label - always visible', 'prov_name': 'header label - always visible', 'com_code': 'header label - always visible', 'com_name': 'header label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'header label - always visible', 'auxiliary_storage_labeling_lineanchorclipping': 'header label - always visible', 'auxiliary_storage_labeling_lineanchortype': 'header label - always visible', 'auxiliary_storage_labeling_lineanchortextpoint': 'header label - always visible', });
lyr_PercorsiRiservaNaturaleValSarmassa_5.set('fieldLabels', {'fid': 'header label - always visible', 'Lunghezza': 'header label - always visible', 'Percorso': 'header label - always visible', 'Nome': 'header label - always visible', 'cod_percorso': 'header label - always visible', });
lyr_PercorsiRiservaNaturaleValSarmassa_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});