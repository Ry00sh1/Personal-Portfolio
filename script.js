window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM carregado');
    
    const changeColorButton = document.getElementById('changeColorButton');
    
    if (changeColorButton) {
      console.log('Botão encontrado');
    
      // Adicionando lógica para alternar o texto do botão
      changeColorButton.addEventListener('click', function() {
        console.log('Botão clicado');
        
        const body = document.body;
        const currentBackgroundColor = body.style.backgroundColor;
        const newBackgroundColor = currentBackgroundColor === 'black' ? 'white' : 'black';
        const newTextColor = currentBackgroundColor === 'black' ? 'black' : 'white';
        
        body.style.backgroundColor = newBackgroundColor;
        body.style.color = newTextColor;
        
        // Verificando o texto atual do botão
        if (changeColorButton.textContent === 'White') {
          // Se o texto for "White", altera para "Black"
          changeColorButton.textContent = 'Black';
          changeColorButton.style.backgroundColor = 'black';
          changeColorButton.style.color = 'white';
        } else {
          // Se o texto for "Black", altera para "White"
          changeColorButton.textContent = 'White';
          changeColorButton.style.backgroundColor = 'white';
          changeColorButton.style.color = 'black';
        }
      });
    } else {
      console.log('Botão não encontrado');
    }
  });
  