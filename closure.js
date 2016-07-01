'use strict';


  
  function addArray(array, variable) {
      var temp = array.length;
      array[temp] = variable;
  }
    function remove(array, index) {
        delete array[index];
       var size = array.length;
        for (var i = 0; i > index; i++)
        {
            array[index] = array[index+1];
        }
        }
    
    function change(array, index, variable) {
        var temp = array.length;
        array[temp] = variable;
    }
    



  var newArray = [1,2,3];
  addArray(newArray, 10);
  remove(newArray, 1);
  change(newArray, 1, 5);


  


