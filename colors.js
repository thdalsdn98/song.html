var Links = {
    setColor:function(color){
      var alist = document.querySelectorAll('a');
      // var i = 0;
      // while( i < alist.length){
      //   alist[i].style.color= color;
      //   i = i + 1
      // }
      $('a').css('color', color);
    }
  }
  var Body = {
      setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
      },
      setBackgroundColor:function(color){
          // document.querySelector('body').style.backgroundColor // = color;
        $('body').css('backgroundColor', color);
      }
    }
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === '어두운 모드'){
      Body.setBackgroundColor('#3c3c3c')
      Body.setColor('white');
      self.value = '밝은 모드';

      Links.setColor('powderblue');
    }  else {
      Body.setBackgroundColor('white')
      Body.setColor('#3c3c3c');
      self.value = '어두운 모드';

      Links.setColor('blue');
      }
    }
