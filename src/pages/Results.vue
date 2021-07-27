<template>

    <main>
        
        
        <div v-for="(item, idx) in infoCnpj" :key='idx' id="raiz">
            <h1>DADOS PÚBLICOS EXTRAÍDOS DO CNPJ</h1>
            <div class="container-info">            
                <h2> Razão Social: <bold>{{ item.razao_social }}</bold></h2>
                <li>Situação: <bold class="status">{{ item.descricao_situacao_cadastral }}</bold></li>
                <li>Número do CNPJ: <bold>{{ item.cnpj }}</bold></li>
                <li>Nome Fantasia: <bold>{{ item.nome_fantasia }}</bold></li>
                <li>Data de Abertura: <bold>{{ item.data_inicio_atividade }}</bold></li>
                <li>Capital Social: <bold>{{ item.capital_social }}</bold></li>
                <li>Tipo: <bold>{{ item.descricao_matriz_filial }}</bold></li>
                <li>Natureza Jurídica: <bold>{{ item.codigo_natureza_juridica }}</bold></li>
                <li>Porte da Empresa: <bold>{{ item.descricao_porte }}</bold></li>
            </div> 

            

            <div class="container-info">
                <h2> Quais as formas de contato? </h2>
                <li>Telefone: Protegido</li>
                <li>E-mail: Protegido</li>
            </div>

            

            <div class="container-info">
                
                <h2>Qual é o endereço da empresa? </h2>
                <li>Estado / UF: <bold>{{ item.uf }}</bold></li>
                <li>Município: <bold>{{ item.municipio }}</bold></li>
                <li>Bairro: <bold>{{ item.bairro }}</bold></li>                
                <li>Número: <bold>{{ item.numero }}</bold></li>
                <li>CEP: <bold>{{ item.cep }}</bold></li>
            </div>

            

            <div class="container-info">          
                
                <h2>Qual a sua atividade econômica?</h2>
                <li>{{ item.cnae_fiscal }}::<bold>{{ item.cnae_fiscal_descricao }}</bold></li>
            </div>

        </div>
        
        
    </main>
</template>



<script>
import axios from 'axios'


export default {
    name: 'Results',
    data() {
        return{
            infoCnpj: []
        }
    },
    mounted(){
        
        /*REQUISIÇÃO PARA API DEVOLVER OS DADOS DO CNPJ*/
        axios.get(`https://minhareceita.org/${this.$route.params.cnpj}`, )
        .then(res => {
            this.infoCnpj.push(res.data)/*ADICIONA O OBJETO AO ARRAY RENDERIZADO NA TAG #RAIZ*/
            
        })
        .catch((err) => {
            console.log(err)
        })
    },

   
    
}
</script>

<style scoped>



.container-info{
    border: 1px solid black;
    padding: 2px;
    background-color: var(--color-background-nav);
    margin-top: 10px;
    margin-bottom: 10px;
}

li{
    margin-top: 3px;
    margin-left: 5px;
}

h1{
    font-size: 23px;
    margin-top: 10px;
}

h2{
    font-size: 18px;
    text-align: center;
}

#raiz{
  margin-bottom: 30px;
  
}

bold{
    font-weight: 600;
}

.status{
   color: green; 
}

@media (min-width: 960px){
        h2{
            font-size: 20px;
            margin-top: 5px;
            text-align: center;
        }
        li{
            margin-top: 2px;
            margin-left: 5px;
        }
        main{
            
            display: flex;
            flex-direction: column;            
            justify-content: space-around;
            align-items: center;
            
            
        }
        h1{
            width: 100%;
            text-align: center;
            margin-top: 0px;
        }

       
       

        
        
    }

</style>