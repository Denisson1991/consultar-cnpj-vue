<template>
    <footer>
        <h2>Saiba mais sobre o Dev</h2>
        <a href="https://github.com/Denisson1991" target="_blank">            
        <img alt="LOGOTIPO" id="logo" src="../assets/github.png" >
        </a>
        <a href="https://www.linkedin.com/in/denisson-vasconcelos-da-silva-416093129/" target="_blank">            
        <img alt="LOGOTIPO" id="logo" src="../assets/linkedin.png">
        </a>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>

    footer{
        height: 60px;
        width: 100%;
        
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
     #logo{
        width: 30px;
    }
    
    @media (min-width: 700px){


        footer{
        height: 60px;
        width: 100%;        
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }
     
   
    }


</style>