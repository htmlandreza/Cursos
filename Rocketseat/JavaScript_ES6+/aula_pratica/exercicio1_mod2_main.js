//Exercícios do Módulo 2

//1.1 - importando e renomeando a default classe

//import ClasseUsuario from "./function";
        //uma classe default pode ser renomeada sem precisar usar "as"
        //classe default não precisa ser importada dentro de {}
        import ClasseUsuario from "../function";

        //chamando a função infor
        ClasseUsuario.info();
        
        //1.2 - importar a variável idade
                //quando nao for uma default class ou se for uma variável
                //deve-se utilizar {}
        import {idade} from "../function";
        
        console.log(idade);
        
        //2.3 - importar a classe a variavel, mas renomear a variável para IdadeUsuario
                        //pra renomear uma classe comum ou uma variável
                        //é necessário colocar nomedaclasse + as + nomequedeseja
        import Usuario, {idade as IdadeUsuario} from "../function";
        