<template>
  <main>
    <div >
      <h2>Historico de pesquisa</h2>
      <div id="raiz" v-for="(item, idx) in historico" :key='idx'>
        <p >
            <a v-on:click="goCheck(item)">{{ item }}</a>
            <button v-on:click="goDelete(idx)">remover</button>
        </p>
      </div>

    </div>
  </main>
</template>

<script>
import router from '../routes/router'
export default {
  name: "History",
  data() {
    return {
      historico: []
    };
  },
  mounted() {
    /*SETANDO ARRAY historico COM FORMATO CORRETO*/
    this.historico = JSON.parse(localStorage.getItem('names'))
    console.log(this.historico);
  },
  methods: {
      /* FUNÇÃO DELETAR CNPJ */
      goDelete(idx) {
          console.log("clicou")
          this.historico.splice(idx, 1);
          localStorage.setItem("names", JSON.stringify(this.historico))

      },
      /* FUNÇÃO CONSULTAR CNPJ DA LISTA */
      goCheck(cnpj){
          router.push({path: `/results/${cnpj}`  })
      }

  }
};
</script>

<style scoped>


  main{
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  #raiz{
      border: 1px solid black;
      margin-top: 20px;
  }



  p{
      display: flex;
      justify-content: space-between;
      width: 300px;
      padding: 10px;
  }

  a{
      cursor: pointer;
  }

  
</style>