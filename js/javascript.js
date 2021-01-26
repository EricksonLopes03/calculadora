var salvarAcao
var conta1
var conta2

function calcular(tipo, valor) {



    if (tipo === 'acao') {


        switch (valor) {
            case 'C':
                document.getElementById('resultado').value = ''
                break

            case '=':

                switch (salvarAcao) {


                    case '+':
                        conta2 = document.getElementById('resultado').value
                        document.getElementById('resultado').value = parseFloat(conta1) + parseFloat(conta2)

                        salvarAcao = null
                        break

                    case '-':
                        conta2 = document.getElementById('resultado').value
                        document.getElementById('resultado').value = parseFloat(conta1) - parseFloat(conta2)
                        salvarAcao = null

                        break

                    case '/':
                        conta2 = document.getElementById('resultado').value
                        if(conta2 == 0){
                            document.getElementById('resultado').value = 'Erro de divisão por 0'
                            var erroDivisaoPorZero = setTimeout( function (){
                                document.getElementById('resultado').value = ''
                            }, 2000)
                            conta1 = 0;
                            conta2 = 0;
                            break
                        }
                        document.getElementById('resultado').value = parseFloat(conta1) / parseFloat(conta2)
                        salvarAcao = null
                        break

                    case 'x':
                        conta2 = document.getElementById('resultado').value
                        document.getElementById('resultado').value = parseFloat(conta1) * parseFloat(conta2)
                        salvarAcao = null
                        break
                }


                break

            case '+':
                conta1 = document.getElementById('resultado').value
                salvarAcao = valor

                document.getElementById('resultado').value = ''
                break

            case '-':
                conta1 = document.getElementById('resultado').value

                salvarAcao = valor
                document.getElementById('resultado').value = ''
                break

            case '/':
                conta1 = document.getElementById('resultado').value

                salvarAcao = valor
                document.getElementById('resultado').value = ''
                break

            case 'x':
                conta1 = document.getElementById('resultado').value

                salvarAcao = valor
                document.getElementById('resultado').value = ''
                break
        }


    } else {



        document.getElementById('resultado').value += valor


    }

}