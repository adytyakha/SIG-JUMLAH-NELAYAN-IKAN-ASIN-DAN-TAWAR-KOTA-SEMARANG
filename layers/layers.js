var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kotasemarang_0 = new ol.format.GeoJSON();
var features_kotasemarang_0 = format_kotasemarang_0.readFeatures(json_kotasemarang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kotasemarang_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kotasemarang_0.addFeatures(features_kotasemarang_0);var lyr_kotasemarang_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kotasemarang_0, 
                style: style_kotasemarang_0,
    title: 'kotasemarang<br />\
    <img src="styles/legend/kotasemarang_0_0.png" />  0 - 27<br />\
    <img src="styles/legend/kotasemarang_0_1.png" />  27 - 56<br />\
    <img src="styles/legend/kotasemarang_0_2.png" />  56 - 75<br />\
    <img src="styles/legend/kotasemarang_0_3.png" />  75 - 151<br />\
    <img src="styles/legend/kotasemarang_0_4.png" />  151 - 1247<br />'
        });

lyr_kotasemarang_0.setVisible(true);
var layersList = [baseLayer,lyr_kotasemarang_0];
lyr_kotasemarang_0.set('fieldAliases', {'id': 'id', 'kecamatan': 'kecamatan', 'periklaut': 'periklaut', 'perumum': 'perumum', 'jumlahtota': 'jumlahtota', });
lyr_kotasemarang_0.set('fieldImages', {'id': 'TextEdit', 'kecamatan': 'TextEdit', 'periklaut': 'TextEdit', 'perumum': 'TextEdit', 'jumlahtota': 'TextEdit', });
lyr_kotasemarang_0.set('fieldLabels', {'id': 'header label', 'kecamatan': 'header label', 'periklaut': 'header label', 'perumum': 'header label', 'jumlahtota': 'header label', });
lyr_kotasemarang_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});