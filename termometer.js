function updateTermometer(){
    var input = document.getElementById('temperature-input').value;
    console.log(input);
    var indicator = document.getElementById('termometer-indicator');
    if(-20 <= input && input <= 50 || input == "-"){
      var rtuti = 60 + (input * 3);
      indicator.style.width = `${rtuti}px`;
    } else {
      alert("Вы ввели неверное значение");
    }
  }