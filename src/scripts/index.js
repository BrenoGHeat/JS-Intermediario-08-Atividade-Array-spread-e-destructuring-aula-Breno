/*
  Importe corretamente as constantes usuarios e enderecos dos arquivos
  dbUsers.js e dbAdress.js, respecitvamente
*/

import { enderecos } from './dbAddress.js' ;
import { usuarios } from './dbUsers.js';



// Faça as importações corretas acima
console.log(usuarios);
console.log(enderecos);

// Adicionar endereços aos usuarios pelo id
function addAddresToUser(listaDeUsuarios, listaDeEnderecos) {
      const usersWithAdress = listaDeUsuarios.map((user) =>{
        const { id } = user;
        const { endereco } = listaDeEnderecos.find((currentAdress) =>{
          return currentAdress.userId === id;
        })
        return {
          ...user,
          endereco,
        };
      });

  return usersWithAdress;
}

// Descomente os consoles abaixo para testar suas funções
console.log(addAddresToUser(usuarios, enderecos));

// Funcao para deletar o password
function deletePassword({ password , ...rest} ) {

  return rest;
};

console.log(deletePassword(usuarios[0]));

// Listar os usuarios sem a senha
function listUsers(usuarios) {

  return usuarios.map((user) => deletePassword(user));

};
console.log(listUsers(usuarios));

// Listar somente nome, email e stack
function listUserStacks(listaDeUsuarios) {
  return listaDeUsuarios.map(({ nome , email , stacks}) => ({
    nome,
    email,
    stacks,
  }));
}
 console.log(listUserStacks(usuarios));

//Deletar um usuário que tenha python na stack
function deleteUser(listaDeUsuarios) {

  return listaDeUsuarios.filter(({stacks}) => !stacks.includes("Python")).map((user) => deletePassword(user));
};
console.log(deleteUser(usuarios));
