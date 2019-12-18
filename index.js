var bloomPass;
var canvas = document.getElementById("map");
var map = new harp.MapView({
    canvas: canvas,
    theme: "theme.json",
    //For tile cache optimization:
    maxVisibleDataSourceTiles: 40,
    tileCacheSize: 100,
    
});


map.setCameraGeolocationAndZoom(new harp.GeoCoordinates(39.8097343, -98.5556199), 4.75);
var mapControls = new harp.MapControls(map);
var ui = new harp.MapControlsUI(mapControls);
canvas.parentElement.appendChild(ui.domElement);


mapControls.maxTiltAngle = 90;
mapControls.enabled = true;


map.resize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", () => {
map.resize(window.innerWidth, window.innerHeight);
});



var BlurDirectionX = new THREE.Vector2(2.0, 0.0);
var BlurDirectionY = new THREE.Vector2(0.0, 2.0);
var bloomFactors = [3.0, 2.5, 2.0, 1.5, 1.0];


var options = {
    tilt: 45,
    labels: false,
    toneMappingExposure: 0,
    outline: {
        enabled: true,
        ghostExtrudedPolygons: false,
        thickness: 0.004,
        color: "#898989"
    },
    bloom: {
        enabled: true,
        strength: 2.0,
        threshold: 0.45,
        radius: 1.0,
        exposure: 2.0
    },
    vignette: {
        enabled: false
    },
    sepia: {
        enabled: true,
        amount: 0.50
    }
};


var omvDataSource = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
    apiFormat: harp.APIFormat.XYZOMV,
    styleSetName: "tilezen",
    authenticationCode: 'AJ6pz7WJRAe0sZwzHHggNAA',

});

map.addDataSource(omvDataSource);

var Vcunder100 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/PwCz5yu4/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(Vcunder100).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'line'",
            renderOrder: 400,
            technique: "solid-line",
            attr: {
                color: "#1100FF",
                opacity: 1.0,
                lineWidth: {
                    interpolation: "Linear",
                zoomLevels: [4.75, 14, 16],
             values: [0.8,2.0, 3.0]
            },
                radius: 1.0,
                strength: 3.0,
                threshold: 0,
                exposure: 2.0,
                blending: THREE.AdditiveBlending,
                transparent: true,
                metricUnit: "Pixel",
                
                direction: {
                    x: 0,
                    y: 30,
                    z: 0
                }
            }
        }
    ];
    Vcunder100.setStyleSet(styles);
    map.update();
});

var Vc100to161 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/nDYLkKPi/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(Vc100to161).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'line'",
            renderOrder: 400,
            technique: "solid-line",
            attr: {
                color: "#00edfe",
                transparent: true,
                metricUnit: "Pixel",
                opacity: 1.0,
                radius: 1.0,
                strength: 3.0,
                threshold: 0,
                exposure: 2.0,
                lineWidth: {
                    interpolation: "Linear",
                zoomLevels: [4.75, 14, 16],
             values: [0.8,2.0, 3.0]
            },
                blending: THREE.AdditiveBlending,
                direction: {
                    x: 0,
                    y: 30,
                    z: 0
                }
            }
        }
    ];
    Vc100to161.setStyleSet(styles);
    map.update();
});
//
var Vc220to287 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/aMGNrOBc/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(Vc220to287).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'line'",
            renderOrder: 800,
            technique: "solid-line",
            attr: {
                color: "#00edfe",
                transparent: true,
                metricUnit: "Pixel",
                opacity: 1.0,
                radius: 1.0,
                strength: 3.0,
                threshold: 0,
                exposure: 2.0,
                lineWidth: {
                    interpolation: "Linear",
                zoomLevels: [4.75, 14, 16],
             values: [1.1, 2.0, 3.0]
            },
                blending: THREE.AdditiveBlending,
                direction: {
                    x: 0,
                    y: 30,
                    z: 0
                }
            }
        }
    ];
    Vc220to287.setStyleSet(styles);
    map.update();
});

var Vc345 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/u8CmeCkJ/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(Vc345).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'line'",
            renderOrder: 800,
            technique: "solid-line",
            attr: {
                color: "#39ff14",
                bloomRadius: 1.0,
                strength: 3.0,
                threshold: 0,
                exposure: 2.0,
                transparent: true,
                metricUnit: "Pixel",
                opacity: 1.0,
                lineWidth: {
                    interpolation: "Linear",
                zoomLevels: [4.75, 14, 16],
             values: [1.1, 2.0, 3.0]
            },
                blending: THREE.AdditiveBlending,
                direction: {
                    x: 0,
                    y: 30,
                    z: 0
                }
            }
        }
    ];
    Vc345.setStyleSet(styles);
    map.update();
});

var Vc500 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/f1jkVgoA/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(Vc500).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'line'",
            renderOrder: 800,
            technique: "solid-line",
            attr: {
                color: "#ff9800",
                transparent: true,
                metricUnit: "Pixel",
                opacity: 1,
                radius: 1.0,
                strength: 3.0,
                threshold: 0,
                exposure: 2.0,
                lineWidth: {
                    interpolation: "Linear",
                zoomLevels: [4.75, 14, 16],
             values: [1.1, 2.0, 3.0]
            },
                blending: THREE.AdditiveBlending,
                direction: {
                    x: 0,
                    y: 30,
                    z: 0
                }
            }
        }
    ];
    Vc500.setStyleSet(styles);
    map.update();
});

var Vc745o = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/N5ZFQsjz/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(Vc745o).then(function () {
    
    var styles = [
        {
            when: "$geometryType ^= 'line'",
            renderOrder: 800,
            technique: "solid-line",
            attr: {
                color: "#fffdd2",
                transparent: true,
                metricUnit: "Pixel",
                opacity: 1.0,
                radius: 1.0,
                strength: 3.0,
                threshold: 0,
                exposure: 2.0,
                lineWidth: {
                    interpolation: "Linear",
                zoomLevels: [4.75, 14, 16],
             values: [1.2, 2.0, 3.0]
            },
                blending: THREE.AdditiveBlending,
                direction: {
                    x: 0,
                    y: 30,
                    z: 0
                }
            }
        }
    ];
    Vc745o.setStyleSet(styles);
    map.update();
});
//

var highdensitypop = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/FGOpKPNk/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(highdensitypop).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'point'",
            renderOrder: 400,
            technique: "circles",
            attr: {
                color: "#F0BF76",
                opacity: 1.0,
                metricUnit: "Pixel",
                size: 12.0,
                roughness: 0.2,
                metalness: 0.5,
                emissive: "#1ffdeb",
                emissiveIntensity: 1.36
            }
        }
    ];
    highdensitypop.setStyleSet(styles);
    map.update();
});
//
var meddensitypop = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/idmJ9VXE/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(meddensitypop).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'point'",
            renderOrder: 400,
            technique: "circles",
            attr: {
                color: "#F0BF76",
                opacity: 1.0,
                metricUnit: "Pixel",
                size: 8.0,
                roughness: 0.2,
                metalness: 0.5,
                emissive: "#1ffdeb",
                emissiveIntensity: 1.36
            }
        }
    ];
    meddensitypop.setStyleSet(styles);
    map.update();
});
//
var lowDensity = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/siOHPV1Q/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(lowDensity).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'point'",
            renderOrder: 400,
            technique: "circles",
            attr: {
                color: "#F0BF76",
                opacity: 1.0,
                metricUnit: "Pixel",
                size: 4.0,
                roughness: 0.2,
                metalness: 0.5,
                emissive: "#1ffdeb",
                emissiveIntensity: 1.36
            }
        }
    ];
    lowDensity.setStyleSet(styles);
    map.update();
});
///////////////loss of night /////////////
var lossmag16 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/srdI9dwj/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(lossmag16).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'point'",
            renderOrder: 400,
            technique: "circles",
            attr: {
                color: "#fff",
                opacity: 1.0,
                metricUnit: "Pixel",
                size: 4.0,
                roughness: 0.2,
                metalness: 1,
                emissive: "#05d1f9",
                emissiveIntensity: 0.8
            }
        }
    ];
    lossmag16.setStyleSet(styles);
    map.update();
});
//
var lossmag17 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/hT3Ygqqy/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(lossmag17).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'point'",
            renderOrder: 400,
            technique: "circles",
            attr: {
                color: "#fff",
                opacity: 1.0,
                metricUnit: "Pixel",
                size: 4.0,
                roughness: 0.2,
                metalness: 1,
                emissive: "#05d1f9",
                emissiveIntensity: 0.8
            }
        }
    ];
    lossmag17.setStyleSet(styles);
    map.update();
});
//
var lossmag18 = new harp.OmvDataSource({
    baseUrl: "https://xyz.api.here.com/hub/spaces/PtXssZ2E/tile/web",
    apiFormat: harp.APIFormat.XYZSpace,
    authenticationCode: "AJ6pz7WJRAe0sZwzHHggNAA" //Use this token!
});
map.addDataSource(lossmag18).then(function () {
    var styles = [
        {
            when: "$geometryType ^= 'point'",
            renderOrder: 400,
            technique: "circles",
            attr: {
                color: "#fff",
                opacity: 1.0,
                metricUnit: "Pixel",
                size: 4.0,
                roughness: 0.2,
                metalness: 1,
                emissive: "#05d1f9",
                emissiveIntensity: 0.8
            }
        }
    ];
    lossmag18.setStyleSet(styles);
    map.update();
});
