var size = 0;
var placement = 'point';
function categories_PercorsiRiservaNaturaleValSarmassa_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'P1 Anello dei tre Comuni':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,25,28,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'P2 Anello del Laghetto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,124,74,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'P3 Anello dei Saraceni':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,201,128,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'P4 Anello della Serra':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,154,139,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'P5 Anello della Ru':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(199,232,173,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'P6 Anello dei Fossili':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,122,191,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PercorsiRiservaNaturaleValSarmassa_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Percorso");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PercorsiRiservaNaturaleValSarmassa_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
