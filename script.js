function aplicarCript() {
    const mensagem = document.getElementById("idMensagem").value;
    const chaveCriptografia = parseInt(document.getElementById("idChaveCriptografia").value);
    const resultadoCriptografia = document.getElementById("idResulto");

    //Teste de caixa preenchida
    if (mensagem.length == 0) {
        window.alert("[Erro] - É necessário inserrir um texto");
        
    } else {
        let radioEscolha = document.getElementsByName('radEscolha');
         //Teste se foi escolhido a caixa 1 ou 0    
        if (radioEscolha[0].checked) {
            //Lógica para cifrar 
            let result = "";
            for (let i = 0; i < mensagem.length; i++) {
            const char = mensagem[i];
            if (char.match(/[a-zA-Z]/)) {
                let charCode = char.charCodeAt(0);
                charCode += chaveCriptografia;
                if (char.match(/[A-Z]/)) {
                if (charCode < 65) charCode += 26;
                if (charCode > 90) charCode -= 26;
                } else {
                if (charCode < 97) charCode += 26;
                if (charCode > 122) charCode -= 26;
                }
                result += String.fromCharCode(charCode);
            } else {
                result += char;
            }
            }
            resultadoCriptografia.value = result;
            

        //Teste se foi escolhido a caixa 1 ou 0       
        }else if (radioEscolha[1].checked) {
            let result = "";
            for (let i = 0; i < mensagem.length; i++) {
            const char = mensagem[i];
            if (char.match(/[a-zA-Z]/)) {
                let charCode = char.charCodeAt(0);
                charCode - chaveCriptografia;
                if (char.match(/[A-Z]/)) {
                if (charCode < 65) charCode += 26;
                if (charCode > 90) charCode -= 26;
                } else {
                if (charCode < 97) charCode += 26;
                if (charCode > 122) charCode -= 26;
                }
                result += String.fromCharCode(charCode);
            } else {
                result += char;
            }            
            resultadoCriptografia.value = result;
            
            //Teste se numeros   
            }if (radioEscolha[0].checked) {
                // Lógica para cifrar com base na posição no alfabeto
                let result = "";
                for (let i = 0; i < mensagem.length; i++) {
                    const char = mensagem[i];
                    if (char.match(/[a-zA-Z]/)) {
                        let charCode = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
                        result += charCode + ' '; // Adiciona a posição como número
                    } else {
                        result += char;
                    }
                }
            resultadoCriptografia.value = result.trim(); // Remove espaços em branco extras teste"
            }
            ""


            
                
        } 
                
    }
}
