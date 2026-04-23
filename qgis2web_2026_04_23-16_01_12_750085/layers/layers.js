var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1 = new ol.format.GeoJSON();
var features_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1 = format_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.readFeatures(json_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.addFeatures(features_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1);
var lyr_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1, 
                style: style_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1,
                popuplayertitle: 'TN_counties — 88542f9f-a105-4d44-9c5b-d550d5aa0c392020329-1-cd8a50.faol',
                interactive: true,
                title: '<img src="styles/legend/TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.png" /> TN_counties — 88542f9f-a105-4d44-9c5b-d550d5aa0c392020329-1-cd8a50.faol'
            });
var format_Municipalities_2 = new ol.format.GeoJSON();
var features_Municipalities_2 = format_Municipalities_2.readFeatures(json_Municipalities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalities_2.addFeatures(features_Municipalities_2);
var lyr_Municipalities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipalities_2, 
                style: style_Municipalities_2,
                popuplayertitle: 'Municipalities',
                interactive: true,
    title: 'Municipalities<br />\
    <img src="styles/legend/Municipalities_2_0.png" /> <br />\
    <img src="styles/legend/Municipalities_2_1.png" /> Arlington<br />\
    <img src="styles/legend/Municipalities_2_2.png" /> Bartlett<br />\
    <img src="styles/legend/Municipalities_2_3.png" /> Collierville<br />\
    <img src="styles/legend/Municipalities_2_4.png" /> Germantown<br />\
    <img src="styles/legend/Municipalities_2_5.png" /> Lakeland<br />\
    <img src="styles/legend/Municipalities_2_6.png" /> Memphis<br />\
    <img src="styles/legend/Municipalities_2_7.png" /> Millington<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.setVisible(true);lyr_Municipalities_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1,lyr_Municipalities_2];
lyr_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Region': 'Region', 'District': 'District', 'Grand': 'Grand', 'Commission': 'Commission', 'FarmBureau': 'FarmBureau', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Municipalities_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'ShapeSTArea': 'ShapeSTArea', 'ShapeSTLength': 'ShapeSTLength', });
lyr_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.set('fieldImages', {'OBJECTID': 'Range', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'Range', 'AWATER': 'Range', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Region': 'Range', 'District': 'Range', 'Grand': 'TextEdit', 'Commission': 'Range', 'FarmBureau': 'Range', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Municipalities_2.set('fieldImages', {'OBJECTID': 'Range', 'NAME': 'TextEdit', 'ShapeSTArea': 'TextEdit', 'ShapeSTLength': 'TextEdit', });
lyr_TN_counties88542f9fa1054d449c5bd550d5aa0c3920203291cd8a50faol_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'COUNTYNS': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'CLASSFP': 'hidden field', 'MTFCC': 'hidden field', 'CSAFP': 'hidden field', 'CBSAFP': 'hidden field', 'METDIVFP': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'Region': 'hidden field', 'District': 'hidden field', 'Grand': 'hidden field', 'Commission': 'hidden field', 'FarmBureau': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_Municipalities_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAME': 'no label', 'ShapeSTArea': 'hidden field', 'ShapeSTLength': 'hidden field', });
lyr_Municipalities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});