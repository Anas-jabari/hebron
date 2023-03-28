ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28191").setExtent([158952.249821, 103641.200222, 160053.533653, 104489.913056]);
var wms_layers = [];

var format_building_0 = new ol.format.GeoJSON();
var features_building_0 = format_building_0.readFeatures(json_building_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_building_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_0.addFeatures(features_building_0);
var lyr_building_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_0, 
                style: style_building_0,
                interactive: true,
                title: '<img src="styles/legend/building_0.png" /> building'
            });
var format_site_1 = new ol.format.GeoJSON();
var features_site_1 = format_site_1.readFeatures(json_site_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_site_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_1.addFeatures(features_site_1);
var lyr_site_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_site_1, 
                style: style_site_1,
                interactive: true,
                title: '<img src="styles/legend/site_1.png" /> site'
            });
var format_street_2 = new ol.format.GeoJSON();
var features_street_2 = format_street_2.readFeatures(json_street_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_street_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_2.addFeatures(features_street_2);
var lyr_street_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_2, 
                style: style_street_2,
                interactive: true,
                title: '<img src="styles/legend/street_2.png" /> street'
            });

lyr_building_0.setVisible(true);lyr_site_1.setVisible(true);lyr_street_2.setVisible(true);
var layersList = [lyr_building_0,lyr_site_1,lyr_street_2];
lyr_building_0.set('fieldAliases', {'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'OWNER_NAME': 'OWNER_NAME', 'RENTAL_NAM': 'RENTAL_NAM', 'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NCENTROID': 'NCENTROID', 'YCENTROID': 'YCENTROID', 'TYPE': 'TYPE', 'NAME': 'NAME', 'NAME_ARABI': 'NAME_ARABI', 'VALUE': 'VALUE', 'AREA2': 'AREA2', });
lyr_site_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', 'NAMEA': 'NAMEA', 'TYPEA': 'TYPEA', 'SPECIFY': 'SPECIFY', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', });
lyr_street_2.set('fieldAliases', {'STREET_PAT': 'STREET_PAT', 'NAME_A': 'NAME_A', 'LENGTH': 'LENGTH', 'TYPE': 'TYPE', 'ST_NAME': 'ST_NAME', });
lyr_building_0.set('fieldImages', {'ENTITY': '', 'LAYER': '', 'OWNER_NAME': '', 'RENTAL_NAM': '', 'ID': '', 'AREA': '', 'PERIMETER': '', 'NCENTROID': '', 'YCENTROID': '', 'TYPE': '', 'NAME': '', 'NAME_ARABI': '', 'VALUE': '', 'AREA2': '', });
lyr_site_1.set('fieldImages', {'NAME': '', 'TYPE': '', 'NAMEA': '', 'TYPEA': '', 'SPECIFY': '', 'X_COORD': '', 'Y_COORD': '', });
lyr_street_2.set('fieldImages', {'STREET_PAT': '', 'NAME_A': '', 'LENGTH': '', 'TYPE': '', 'ST_NAME': '', });
lyr_building_0.set('fieldLabels', {'ENTITY': 'no label', 'LAYER': 'no label', 'OWNER_NAME': 'no label', 'RENTAL_NAM': 'no label', 'ID': 'no label', 'AREA': 'inline label', 'PERIMETER': 'no label', 'NCENTROID': 'no label', 'YCENTROID': 'no label', 'TYPE': 'inline label', 'NAME': 'inline label', 'NAME_ARABI': 'no label', 'VALUE': 'no label', 'AREA2': 'no label', });
lyr_site_1.set('fieldLabels', {'NAME': 'inline label', 'TYPE': 'inline label', 'NAMEA': 'no label', 'TYPEA': 'no label', 'SPECIFY': 'no label', 'X_COORD': 'inline label', 'Y_COORD': 'inline label', });
lyr_street_2.set('fieldLabels', {'STREET_PAT': 'no label', 'NAME_A': 'no label', 'LENGTH': 'no label', 'TYPE': 'inline label', 'ST_NAME': 'inline label', });
lyr_street_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});