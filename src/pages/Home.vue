<template>
    <main>
        <img alt="logotipo" id="logo-home" src="../assets/logoHome.png">
        <div>
            <form v-on:submit.prevent="checkForm">
                <input 
                v-model="inputCnpj" 
                placeholder="DIGITE O CNPJ" 
                id="input" 
                required 
                pattern="^\d{14}$" 
                title="O CNPJ deve conter 14 números sem traço, barra ou ponto"              
                >
                <button>Consultar</button>
                
            </form>
        </div>
        
        
        

    </main>
</template>

<script>
import router from '../routes/router'
export default {
    name: "Home",
    
    
    data(){
        return {    
            inputCnpj: null,
            dadoSalvos: JSON.parse(localStorage.getItem("names")) || []/*ARRAY DE INPUTS DO USUARIO*/
                
                
            
        }
    },
  
    methods: {
       checkForm: function() {  /*FUNÇÃO CHAMADA NA TAG FORM*/         
            
            if (typeof this.inputCnpj == 'string') { /*VERIFICA SE O CAMPO DE INPUT EXISTE E SE É STRING*/
                router.push({path: `/results/${this.inputCnpj}`  }) /*ADICIONA O PARAMETRO DA ROTA COM O INPUT DO USUARIO*/
                this.dadoSalvos.push(this.inputCnpj) /*ADICIONA O VALOR DE INPUT AO ARRAY DE DADOS*/
                localStorage.setItem("names", JSON.stringify(this.dadoSalvos))/*ADICIONA O VALOR DO ARRAY DE DADOS AO LOCALSTORAGE*/
                
            
            }
            
        },
        
    }
    
}
</script>

<style scoped>

    img{
        width: 340px;
        height: 40vh;
        margin-top: 100px;
        
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
    }



    input{
        margin-top: 30px;
        width: 300px;
        height: 5vh;
        padding: 5px;
        font-size: 20px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    button{
        font-weight: 700;
        font-size: 15px;
        font-family: sans-serif;
        border-radius: 5px;
        margin-top: 10px;
        width: 200px;
        height: 5vh;
        background-color: var(--color-background-nav);
    }

    button:hover{
        background-color: var(--color-background-nav);
        cursor: pointer;
    }

    @media(min-width: 700px){
        img{
            width: 370px;
            height: 45vh;
        }
        main{
        
        height: 80.8vh;
    }
    }

</style>