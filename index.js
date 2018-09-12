function test1() { 
var list = [10, 20, 30];

function changeElements(list) {
  // your code
  function changeStructEl(ferstEl,secondEl,...otherEl){
      return [secondEl,ferstEl,...otherEl]
  }
 window.list =  changeStructEl(...list);
 
}
    changeElements(list);
    console.log(list); // [20, 10, 30];
}

function test2(){
    var list = [30, -5, 0, 10, 5];

    function mySort(list) {
    // your code
    const maxValStorage = [];
    const  getMax=(mas)=> Math.max(...mas);
    const countDel = 1;
    while(list.length) {
        const maxVal = getMax(list);
        const maxValIndex = list.indexOf(maxVal);
        list.splice(maxValIndex, countDel);
        maxValStorage.unshift(maxVal);
    }
    window.list = [...maxValStorage]
    }
    mySort(list);
    console.log(list); // [-5, 0, 5, 10, 30]
}

function test3(){
    var func1 = function(message) {
        this(message);
      }
      
      var func2 = func1.bind(alert);
      func2('Test'); // alert 'Test'
      
      var func1 = function(message) {
        this(message);
      }
      
      var func2 = func1.bind(alert);
      func2('Test'); // alert 'Test'
      
      function myBind(func, context) {
        // your code
       return func.prototype = context;
      }
      
      var func3 = myBind(func1, alert);
      func3('Test'); // alert 'Test'
}