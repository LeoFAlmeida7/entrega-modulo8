const form = document.getElementById('formAgenda');
            const linhas = []; // Array para armazenar as linhas da tabela

            form.addEventListener('submit', function(e){
                e.preventDefault();
                adicionaLinha();
                atualizaTabela();
            });
            
            function adicionaLinha(){
                const inputNome = document.getElementById('inputNome');
                const inputTel = document.getElementById('inputTel');
            
                // Criando a linha HTML da tabela
                let linha = '<tr>';
                linha += `<td>${inputNome.value}</td>`;
                linha += `<td>${inputTel.value}</td>`;
                linha += '</tr>';
            
                // Adicionando a linha ao array de linhas
                linhas.push(linha);
            
                // Limpa os campos do formulário
                inputNome.value = '';
                inputTel.value = '';
            }
            
            function atualizaTabela(){
                const corpoTabela = document.querySelector('tbody');
                corpoTabela.innerHTML = linhas.join('');
            }