
var data = {}, min = Number.MAX_VALUE, max = 0;
sampleData.forEach(el => {
  data[el.id]= el.gdp;
  if(el.gdp < min)
    min = el.gdp;
  if(el.gdp > max)
    max = el.gdp;
});

var mapRender = $('#map').vectorMap(
  {
    map: 'indonesia_new',
    series: {
      regions: [{
        values: data,
        scale: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        legend: {
          vertical: true
        }
      }],
      // markers: [{
      //   attribute: 'fill',
      //   scale: ['#C8EEFF', '#0071A4'],
      //   normalizeFunction: 'polynomial',
      //   values: [min,max],
      //   legend: {
      //     vertical: true
      //   }
      // }]
    },
    onRegionTipShow: function(e, el, code){
      el.html(el.html()+' (Data : '+data[code]+')');
    },
    onRegionClick : function(e,code){
      console.log("Anda mengklik provinsi " +code +" - " + kodeWilayah[code]);
    }
  });
  var map=$("#map").vectorMap('get','mapObject');

  // manual resize div
  function resizableStart(e){
      this.originalW = this.clientWidth;
      this.originalH = this.clientHeight;
      this.onmousemove = resizableCheck;
      this.onmouseup = this.onmouseout = resizableEnd;
  }
  function resizableCheck(e){
      if(this.clientWidth !== this.originalW || this.clientHeight !== this.originalH) {
          this.originalX = e.clientX;
          this.originalY = e.clientY;
          this.onmousemove = resizableMove;
      }
  }
  function resizableMove(e){
      var newW = this.originalW + e.clientX - this.originalX,
          newH = this.originalH + e.clientY - this.originalY;
      if(newW < this.originalW){
          this.style.width = newW + 'px';
      }
      if(newH < this.originalH){
          this.style.height = newH + 'px';
      }

      // resize map 

  }
  function resizableEnd(){

      updateMapSize();

      this.onmousemove = this.onmouseout = this.onmouseup = null;
      
  }
  var els = document.getElementsByClassName('resizable');
  for(var i=0, len=els.length; i<len; ++i){
      els[i].onmouseover = resizableStart;
  }

  // document.getElementById("container").onmouseclick = resizableStart;

  function updateMapSize(){
    map.updateSize(); 

  }
  