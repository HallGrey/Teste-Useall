
// função para encontrar valores repetidos 
function possuiValoresRepetidos(vetor) {
    const ocorrencias = {};
    
    //estrutura de repetição para passar pelos valores de um vetor
    for (let i = 0; i < vetor.length; i++) {
      const valor = vetor[i];
      //estrutura condicional que vai validar se um valor é repetido, se sim, retorna true
      if (ocorrencias[valor]) {
        return true; // 
      }
      ocorrencias[valor] = true;
    }
    //se não cair no if, cai aqui e retorna false
    return false; 
  }
  
  // Exemplo de um vetor que volta falso para valores repetidos
  const vetor1 = [1, 2, 3, 4, 5];
  console.log(possuiValoresRepetidos(vetor1)); 
  //Exemplo de um vetor que volta verdadeiro para valores repetidos
  const vetor2 = [1, 2, 3, 3, 4, 5];
  console.log(possuiValoresRepetidos(vetor2)); 