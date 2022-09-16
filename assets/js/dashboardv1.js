$(function () {
  $(".card-summary").on("click", function (e) {
    $(this).toggleClass("open");
  });

  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000
});
});

// Facebook CMO
$(function () {
    var breakPoint = getBreaks(4);
    function getBreaks(bp){
        return Math.round(Math.floor(100 / bp));
    }

  var rawData = 70,
    data = getData(rawData);

  function getData(rawData) {
    var data = [],
      start = Math.round(Math.floor(rawData / breakPoint) * breakPoint);
    data.push(rawData);
    for (i = start; i > 0; i -= breakPoint) {
      data.push({
        y: i,
      });
    }
    return data;
  }

//   Highcharts.chart("riskChart", {
//     chart: {
//       type: "solidgauge",
//       marginTop: 10,
//       height: 100
//     },

//     title: {
//       text: "",
//     },

//     subtitle: {
//       text: rawData,
//       style: {
//         "font-size": "10px",
//       },
//       y: 200,
//       zIndex: 7,
//     },

//     tooltip: {
//       enabled: false,
//     },

//     pane: [
//       {
//         startAngle: -100,
//         endAngle: 100,
//         background: [
//           {
//             // Track for Move
//             outerRadius: "100%",
//             innerRadius: "80%",
//             backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
//               .setOpacity(0.3)
//               .get(),
//             borderWidth: 0,
//             shape: "arc",
//           },
//         ],
//         size: "120%",
//         center: ["50%", "65%"],
//       },
//       {
//         startAngle: -120,
//         endAngle: 120,
//         size: "95%",
//         center: ["50%", "65%"],
//         background: [],
//       },
//     ],

//     yAxis: [
//       {
//         min: 0,
//         max: 100,
//         lineWidth: 2,
//         lineColor: "white",
//         tickInterval: breakPoint,
//         labels: {
//           enabled: false,
//         },
//         minorTickWidth: 0,
//         tickLength: 50,
//         tickWidth: 5,
//         tickColor: "white",
//         zIndex: 6,
//         stops: [
//           [0, "#fff"],
//           [0.101, "#0f0"],
//           [0.301, "#4b0"],
//           [0.501, "#870"],
//           [0.701, "#c30"],
//           [0.901, "#f03"],
//           [1, "#f06"],
//         ],
//       },
//       {
//         linkedTo: 0,
//         pane: 1,
//         lineWidth: 9,
//         lineColor: "white",
//         tickPositions: [],
//         zIndex: 6,
//       },
//     ],

//     series: [
//       {
//         animation: false,
//         dataLabels: {
//           enabled: false,
//         },
//         borderWidth: 0,
//         color: Highcharts.getOptions().colors[0],
//         radius: "100%",
//         innerRadius: "80%",
//         data: data,
//       },
//     ],
//   });

    Highcharts.chart('riskChart', {

        chart: {
            type: 'gauge',
            backgroundColor: 'transparent',
            height: 190,
            width: 190,
        },

        title: {
            text: ''
        },

        pane: {
            background:null,
            startAngle: -90,
            endAngle: 90,
            size: '110%',
            center: ['50%', '50%'],
        },

        // the value axis
        yAxis: {
            lineWidth: 0,
            min: 0,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 0,
            minorTickLength: 0,
            minorTickPosition: 'inside',
            minorTickColor: '#ccc',

            tickPixelInterval: 0.1,
            tickWidth: 2,
            // tickPosition: 'side',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                y:10,
                style:{
                    color:'#000',
                    cursor:'default',
                    fontSize:'14px'
                },                
            },
            title: {
                text: 'Progress',
                style: {
                    color: '#FFF',
                    fontWeight: 'bold'
                },
                y:60
            },
            plotBands: [{
                    from: 0,
                    to: 25,
                    color: '#009244', // green
                    thickness:50,
                }, {
                    from: 25,
                    to: 50,
                    color: '#FFFF00', // yellow
                    thickness:50,
                }, {
                    from: 50,
                    to: 75,
                    color: '#FB8C00', // red
                    thickness:50,
                }, {
                    from: 75,
                    to: 100,
                    color: '#D50000', // blue
                    thickness:50,
                }]
        },
        
        series: [{
            name: 'Risk',
            data: [{y:75, name:'Amber'}],
            dataLabels: {
                // format: '<div style="font-size:25px;margin-top:15px">{y} {name}</div>',
                // formatter: function() {
                //     if(this.value <= 25) return this.value+' => Low';
                //     if(this.value > 25 && this.value <=50) return this.value+' => Medium';
                //     if(this.value > 50 && this.value <=75) return this.value+' => Amber';
                //     if(this.value > 75 && this.value <=100) return this.value+' => High';
                //     return this.value;
                // }
                formatter: function () {
                    // console.log(this.y);
                    let str='';
                    if(this.y <= 25) {str = this.y+' - Low'}
                    else if(this.y > 25 && this.y <=50) {str =  this.y+' - Medium';}
                    else if(this.y > 50 && this.y <=75) {str =  this.y+' - Amber';}
                    else if(this.y > 75 && this.y <=100) {str =  this.y+' - High';}
                    else { str =  this.y;}

                    return str;
                },
                style:{
                    fontSize: 16
                },
                enabled: true,
                useHTML: true,
            },
            tooltip: {
                valueSuffix: ' %'
            }
        }],
        credits: {
            enabled: false
        },

    },
    // Add some life
    function (chart) {
        
    });

    Highcharts.chart('propertyScoreChart', {

        chart: {
            type: 'gauge',
            backgroundColor: 'transparent',
            height: 200,
        },

        title: {
            text: ''
        },

        pane: {
            background:null,
            startAngle: -90,
            endAngle: 90,
            size: '110%',
            center: ['50%', '50%'],
        },

        // the value axis
        yAxis: {
            lineWidth: 0,
            min: 0,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 0,
            minorTickLength: 0,
            minorTickPosition: 'inside',
            minorTickColor: '#ccc',

            tickPixelInterval: 0.1,
            tickWidth: 2,
            // tickPosition: 'side',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                y:10,
                style:{
                    color:'#000',
                    cursor:'default',
                    fontSize:'14px'
                },                
            },
            title: {
                text: 'Progress',
                style: {
                    color: '#FFF',
                    fontWeight: 'bold'
                },
                y:60
            },
            plotBands: [{
                from: 0,
                to: 25,
                color: '#009244', // green
                thickness:50,
            }, {
                from: 25,
                to: 50,
                color: '#FFFF00', // yellow
                thickness:50,
            }, {
                from: 50,
                to: 75,
                color: '#FB8C00', // red
                thickness:50,
            }, {
                from: 75,
                to: 100,
                color: '#D50000', // blue
                thickness:50,
            }]
        },
        
        series: [{
            name: 'Risk',
            data: [{y:50, name:'Amber'}],
            dataLabels: {
                // format: '<div style="font-size:25px;margin-top:15px">{y} {name}</div>',
                // formatter: function() {
                //     if(this.value <= 25) return this.value+' => Low';
                //     if(this.value > 25 && this.value <=50) return this.value+' => Medium';
                //     if(this.value > 50 && this.value <=75) return this.value+' => Amber';
                //     if(this.value > 75 && this.value <=100) return this.value+' => High';
                //     return this.value;
                // }
                formatter: function () {
                    // console.log(this.y);
                    let str='';
                    if(this.y <= 33) {str = this.y+' - Low'}
                    else if(this.y > 33 && this.y <=67) {str =  this.y+' - Medium';}
                    else if(this.y > 67 && this.y <=100) {str =  this.y+' - High';}
                    else { str =  this.y;}

                    return str;
                },
                style:{
                    fontSize: 20
                },
                enabled: true,
                useHTML: true,
            },
            tooltip: {
                valueSuffix: ' %'
            }
        }],
        credits: {
            enabled: false
        },

    },
    // Add some life
    function (chart) {
        
    });
});
