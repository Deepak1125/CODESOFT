document.querySelectorAll('.num,.op,.eq,.clear').forEach(button => {
    button.addEventListener('click', (e) => {
      const display = document.getElementById('display');
      const value = e.target.textContent;
      switch (value) {
        case '=':
          try {
            display.value = evaluate(display.value);
          } catch (e) {
            display.value = "Error";
          }
          break;
        case 'C':
          display.value = "";
          break;
        default:
          if (display.value === "Error") {
            display.value = "";
          }
          display.value += value;
          break;
      }
    });
  });
  
  function evaluate(expression) {
    expression = expression.replace(/[^0-9+\-*/.()]/g, '');
    try {
      return eval(expression);
    } catch (e) {
      return "Error";
    }
  }
  
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      button.style.color = 'green';
      setTimeout(() => {
        button.style.color = 'black';
      }, 300);
    });
  });
