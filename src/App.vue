<template>
  <p>Sem diretiva</p>
  <p v-texto="'blue'">Minha primeira diretiva customizada</p>
  <p v-texto="{ cor: 'red', tamanhoDaFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p>
  <p v-texto="configuracaoTextoTeste">Teste</p>
  <div v-posicao:absolute="75" v-texto="{ cor: 'green', totalCaracteres: 100 }">Olá, eu sou um binding de argumento e valor!</div>
  <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você encontrá o Código A na parte frontal do equipamento'"> i</span>
  <br/>
  <span>Código B: </span><input type="text"><span v-informacao:destacado.sairAutomaticamente.doisClickMouse="'Você encontrará o Código B na parte traseira do equipamento, abaixo da tampa de proteção'"> i</span>
  <hr>
  <h1 v-colorir-fundo-texto="'green'">Diretiva Customizada Registrada Localmente (No Componente)</h1>
</template>

<script>
  import colorirFundoTexto from './directves/colorirFundoTexto.js'

  export default {
    name: 'App',
    directives: {
      colorirFundoTexto: colorirFundoTexto
    },
    data: () => ({
      configuracaoTextoTeste: { cor: 'blue', totalCaracteres: 4 }
    })
  }
</script>

<style scoped>

</style>