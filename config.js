var config = {
    style: 'mapbox://styles/mapbox/outdoors-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: window.MAPBOX_ACCESS_TOKEN || '',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'From the Olympic Peninsula to the Arctic Ocean',
    subtitle: '42 days, xx,000 miles, 1 big adventure.',
    byline: 'Todd, Deb, and Simon',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Setting the Scene',
            image: './assets/banner.jpg',
            description: 'We were looking for a big adventure. So I quit my job in late 2024, bought a truck, put on a camper, and spent the spring of 2025 trying to figure out the whole overlanding thing. <br> <br> We were looking for majestic landscapes in wild and remote places. As a way to draw us as far north as we could go, we settled on Tuktoyaktuk, an Inuvialuit community on the coast of the Arctic Ocean, as the destination. Every mile, from the Olympic Peninsula to Tuk, was new to us. As we slowly make our way north, the sense of awe became overwhelming. Without any hope of doing justice to the landscape or the adventure, here it is. <br> <br> We hope you enjoy.',
            location: {
                center: [-122, 58],
                zoom: 4.1,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideAllRegions',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'olympic-peninsula-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Olympic Peninsula',
            subtitle: 'The adventure begins',
            //image: './assets/banner.jpg',
            description: 'Day 1 to Day 5  <br> <br>Mile 0 to xxx <br> <br> Colonel Bob Peak, Tide Pooling, Hurricane Ridge.',
            location: {
                center: [-122.5, 47.8],
                zoom: 8.0,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showOlympicMarkers',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'colonel-bob-peak-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Colonel Bob Peak',
            image: './assets/banner.jpg',
            description: 'Day 1 to Day 5  <br> <br>Mile 0 to xxx <br> <br> Colonel Bob Peak, Tide Pooling, Hurricane Ridge.',
            location: {
                center: [-123.75, 47.4889],
                zoom: 15,
                pitch: 70,
                bearing: -90,
                duration: 4000,
                essential: true
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideAllRegions',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'vancouver-island-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Vancouver Island',
            //image: './assets/banner.jpg',
            description: 'Day x to Day 7  <br> <br>Mile 0 to xxx <br> <br> Orca, logging trucks, and coastal adventures.',
            location: {
                center: [-123.5, 49.8],
                zoom: 6.0,
                pitch: 0,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showVancouverIslandMarkers',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'inner-passage-ferry-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Inner Passage Ferry',
            //image: './assets/banner.jpg',
            description: 'Day x to Day x  <br> <br>Mile xxx to xxx <br> <br> Coastal ferry route through Southeast Alaska.',
            location: {
                center: [-127.0, 53.0],
                zoom: 5,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showInnerPassageFerry',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stewart-cassiar-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Stewart-Cassiar Highway',
            //image: './assets/banner.jpg',
            description: 'Day x to Day x  <br> <br>Mile xxx to xxx <br> <br> Remote highway through northern British Columbia.',
            location: {
                center: [-129.5, 59.0],
                zoom: 6.0,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showStewartCassiar',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'yukon-haines-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Yukon and Haines',
            //image: './assets/banner.jpg',
            description: 'Day x to Day x  <br> <br>Mile xxx to xxx <br> <br> Yukon Territory and the Haines Highway.',
            location: {
                center: [-136.0, 60.0],
                zoom: 6.0,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showYukonHaines',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wrangell-st-elias-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Wrangell-St. Elias',
            //image: './assets/banner.jpg',
            description: 'Day x to Day x  <br> <br>Mile xxx to xxx <br> <br> America\'s largest national park and glaciers.',
            location: {
                center: [-143.0, 61.5],
                zoom: 6.5,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showWrangellStElias',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dempster-highway-identifier',
            showMarker: false,
            alignment: 'right',
            hidden: false,
            title: 'Dempster Highway',
            //image: './assets/banner.jpg',
            description: 'Day x to Day x  <br> <br>Mile xxx to xxx <br> <br> The highway to the Arctic Ocean and Tuktoyaktuk.',
            location: {
                center: [-137.0, 66.0],
                zoom: 6.0,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showDempsterHighway',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Washington, D.C.',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'hideAllRegions',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
