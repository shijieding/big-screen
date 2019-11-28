import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import "echarts/dist/extension/bmap.js"


@Component({
  selector: 'app-bmap',
  templateUrl: './bmap.component.html',
  styleUrls: ['./bmap.component.styl']
})
export class BmapComponent implements OnInit {

  constructor(
    private el: ElementRef
  ) { }
  
  data = [
    {name: '廊坊', value: [116.7,39.53,193]},
    {name: '菏泽', value: [115.480656,35.23375,194]},
    {name: '合肥', value: [117.27,31.86,200]}
  ]

  option = null;

  ngOnInit() {
    this.setOption();
    this.initChart();
  }

  initChart () {
    let dom = this.el.nativeElement.querySelector('.main')
    let myChart = echarts.init(dom)
    myChart.setOption(this.option)
    myChart.on('click',(d) => {
      console.log(d);
    });
  }

  setOption () {
    this.option = {
      backgroundColor: 'transparent',
      title: {
        text: '全国主要猪场',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: (d) => {
          console.log(d)
          return d.name
        }
      },
      bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: [
                  {
                      "featureType": "water",
                      "elementType": "all",
                      "stylers": {
                          "color": "#044161"
                      }
                  },
                  {
                      "featureType": "land",
                      "elementType": "all",
                      "stylers": {
                          "color": "#004981"
                      }
                  },
                  {
                      "featureType": "boundary",
                      "elementType": "geometry",
                      "stylers": {
                          "color": "#064f85"
                      }
                  },
                  {
                      "featureType": "railway",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "highway",
                      "elementType": "geometry",
                      "stylers": {
                          "color": "#004981"
                      }
                  },
                  {
                      "featureType": "highway",
                      "elementType": "geometry.fill",
                      "stylers": {
                          "color": "#005b96",
                          "lightness": 1
                      }
                  },
                  {
                      "featureType": "highway",
                      "elementType": "labels",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "arterial",
                      "elementType": "geometry",
                      "stylers": {
                          "color": "#004981"
                      }
                  },
                  {
                      "featureType": "arterial",
                      "elementType": "geometry.fill",
                      "stylers": {
                          "color": "#00508b"
                      }
                  },
                  {
                      "featureType": "poi",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "green",
                      "elementType": "all",
                      "stylers": {
                          "color": "#056197",
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "subway",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "manmade",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "local",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "arterial",
                      "elementType": "labels",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "boundary",
                      "elementType": "geometry.fill",
                      "stylers": {
                          "color": "#029fd4"
                      }
                  },
                  {
                      "featureType": "building",
                      "elementType": "all",
                      "stylers": {
                          "color": "#1a5787"
                      }
                  },
                  {
                      "featureType": "label",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  }
          ]
        }
      },
      series: [
        {
          name: '',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: this.data,
          symbolSize: 10,
          // showEffectOn: 'emphasis',
          rippleEffect: {
              brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
              normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
              }
          },
          itemStyle: {
              normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
              }
          },
          zlevel: 1
        }
      ]
    }
  }



}
