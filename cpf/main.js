var env = document.querySelector (".ebtn") // seleciona o botão de validar

env.addEventListener ('click', () => {     // adiciona um evento de clique
    enviar()                               // dentro do evento é criada uma função que será utilizada ao apertar o botão de validar
})

function NumberCPF(n) {                    // função para validar se todos os números são iguais
    var First = n[0]                       // pega o primeiro item do array
    var Different = false                  // variável que irá retornar falso caso sejam diferentes

    for (var i = 1; i < n.length; i++) {   // for que irá passar por todos os números do array de n
        if (n[i] != First) {                // if para verificar se todos os outros dígitos são diferentes do primeiro, se caso sejam Different recebe true
            Different = true                // caso não sejam a variável Different vai mudar para verdadeiro (válido)
        }
    }
    return Different                        // se Different for verdadeiro ela irá retornar e o código poderá continuar
}

function enviar() {                        // função criada
    var cpfnumber = document.getElementById ("icpf").value                                   // pega os valores digitados no input de texto com o id #icpf
    var cpfregex = cpfnumber.replace (/\./, "").replace (/\./, "").replace (/\-/, "")        // retira a pontuação do cpf caso haja, ".replace()" reescreve algo
    
    var n = cpfregex.substr (0, 9)        // pega apenas os primeiros 9 digitos (0 = valor inicial, 9 = último carácter)
    var n = n.split ('')                  // separa os itens em um array com ''
    
    var result = document.querySelector (".result")                 // pega o H2 do HTML que irá escrever o resultado na tela
    result.textContent = "O CPF é válido!"       // respota caso seja válido, irá adicionar o texto ao H2
    result.textContent = "O CPF é inválido!"     // respota caso seja inválido, irá adicionar o texto ao H2
    
    if (!NumberCPF(n)) {                // antes do programa continuar ele verifica se a função de verificar se todos os números são iguais, caso sejam ela retorna falso e o programa não continua
        return false
    }

    // 1 fórmula 
    
    var multi = ['10', '9', '8', '7', '6', '5', '4', '3', '2']    // array que será utilizado na multiplicação
    var n12 = 0                                                   // variável
    var sf = 0                                                    // variável
    
    for (var i = 0; i < multi.length; i++){
        n12 = n[i] * multi[i]                  // "for" para multiplicar cada número inteiro dentro do array "n" por cada um de "multi" 
        sf += n12                              // "sf" foi criada para armazenar o resultado da multiplicação
    }
    
    sf = (sf * 10) % 11                        // soma da fórmula, sf multiplicado por 10 e o resto da divisão por 11 (%)
    
    if (sf == 10 && sf == 11) {                // se sf for 10 ou 11 ele irá receber o valor de 0
        sf = 0
    }
    
    // 2 fórmula
    
    var multi2 = ['11', '10', '9', '8', '7', '6', '5', '4', '3', '2']    // array que será utilizado na multiplicação
    var sf2 = 0                                                          // variável
    
    n.push (sf)                                                          // "push" é utilizado para adicionar um elemento existente a última posição do array
    
    for (var i = 0; i < multi2.length; i++){
        n[i] *= multi2[i]                      // "for" para multiplicar cada número inteiro dentro do array "n" por cada um de "multi2" 
        sf2 += n[i]                            // "sf2" foi criada para armazenar o resultado da multiplicação
    }
    
    sf2 = (sf2 * 10) % 11                      // soma da fórmula, sf2 multiplicado por 10 e o resto da divisão por 11 (%)
    
    if (sf2 == 10 && sf2 == 11) {              // se sf2 for 10 ou 11 ele irá receber o valor de 0
        sf2 = 0
    }

    var verif = cpfregex.substr (9, 11)         // pega os últimos dois digitos do CPF (dígitos verificadores)
    
    if (verif == sf + "" + sf2){                                        //se a soma dos dois valores for igual ao CPF digitado o CPF é válido
        result.textContent = "O CPF é válido!"
    } else if (verif != sf + "" + sf2){                                 //se a soma dos dois valores for diferente do CPF digitado o CPF é inválido
        result.textContent = "O CPF é inválido!" 
    }
    
}

var clear = document.querySelector (".cbtn")    // seleciona o botão de Limpar

clear.addEventListener ('click', () => {          // adiciona um evento de clique ao botão
    ClearInput()                               // dentro do evento é criada uma função que será utilizada ao clickar o botão de limpar
})

var inputs = document.querySelectorAll ("[name = 'icpf']")   // seleciona todos os inputs que possuem o nome "icpf"
var clearResults = document.querySelector (".result")        // seleciona o texto do H2

function ClearInput() {
    if ([inputs] != 0) {                // se os valores dentro do input forem diferentes de 0
        inputs[0].value = ""            // o input irá receber o valor de "", que é vazio, assim zerando o input
    }
    if (clearResults != "") {           // se o texto dentro do H2 for diferente de "vazio"
        clearResults.textContent = ""   // o valor do texto recebe o valor igual a "", que é vazio, assim zerando o resultado na tela
    }
}



// n.forEach(element => {
    //     n1.push (parseInt(element))        // transforma item em inteiro caso seja um caractere
    // });