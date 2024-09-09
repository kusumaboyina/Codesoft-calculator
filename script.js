// JavaScript for calculator functionality
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = null;
    let operand2 = null;
  
    // Handle button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = button.getAttribute('data-value');
  
        // Clear the display
        if (button.id === 'clear') {
          currentInput = '';
          operator = '';
          operand1 = null;
          operand2 = null;
          display.textContent = '0';
          return;
        }
  
        // Handle equals button
        if (value === '=') {
          operand2 = parseFloat(currentInput);
          const result = calculate(operand1, operand2, operator);
          display.textContent = result;
          currentInput = '';
          operator = '';
          operand1 = result;
          operand2 = null;
          return;
        }
  
        // Handle operator buttons
        if (['+', '-', '*', '/'].includes(value)) {
          if (operator) {
            operand2 = parseFloat(currentInput);
            const result = calculate(operand1, operand2, operator);
            display.textContent = result;
            operand1 = result;
            operand2 = null;
          } else {
            operand1 = parseFloat(currentInput);
          }
          operator = value;
          currentInput = '';
          return;
        }
  
        // Handle number and dot buttons
        currentInput += value;
        display.textContent = currentInput;
      });
    });
  
    // Calculate function
    function calculate(operand1, operand2, operator) {
      switch (operator) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          return operand1 / operand2;
        default:
          return 0;
      }
    }
  });
  