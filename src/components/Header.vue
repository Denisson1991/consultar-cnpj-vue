<template>
    <header>
        <nav class="container">

            <a href="/">            
                <img alt="LOGOTIPO" id="logo" src="../assets/logo4.png"><h2>Consulte Já</h2>
            </a>

            <img v-on:click="openMenu" alt="Acessar menu" id="menu-hamburguer" src="../assets/logo3.png">

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-items" :class='{active: menuActive}'>
                <img alt="LOGOTIPO" id="menu-logo" src="../assets/logo4.png">
                <ul>
                    <li v-on:click="openMenu"><router-link to="/" >Home</router-link></li>
                    <li ><a href="/history">Histórico</a></li>
                    
                </ul>
            </div>

        </nav>
        
 
    </header>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            menuActive: false 
        }
    },
    /* DINAMICA RETRATIL MENU */
    methods:{        
        openMenu: function(){
            this.menuActive = !this.menuActive;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }
    /* DINAMICA RETRATIL MENU */
}
</script>

<style scoped>

    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    #logo{
        width: 50px;
    }

    #menu-hamburguer{
        width: 30px;
    }

    nav{
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 60px;
        align-items: center;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #4d696e;
        opacity: 0.8;

    }

    #menu-logo{
        width: 130px;
        margin-top: 30px;  
        margin-bottom: 10px;      
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active{
        display: flex;

    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul a{
        color: var(--color-text-dark);
    }

    ul li{
        margin: 20px 0px;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    li{
        font-weight: 600;
    }

    h2{
        font-size: 30px;
         color: black;
    }

    @media (min-width: 700px){
        #menu-hamburguer,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
            height: 60px;
            align-items: center;
            
        }

        ul li{
            margin: 0;
            margin-left: 20px;
        }
    }

   
</style>
