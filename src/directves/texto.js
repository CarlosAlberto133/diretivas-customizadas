export default {
    created(el, binding) { //chamado antes que os atributos do elemento ou ouvintes do evento (event listeners) sejam aplicados
        //console.log(binding.value)
        if(binding.value?.cor) {
            el.style.color = binding.value.cor
        }
        if(binding.value?.tamanhoDaFonte) {
            el.style.fontSize = binding.value.tamanhoDaFonte
        }

        let totalCaracteres = 25
        if(binding.value?.totalCaracteres) {
            totalCaracteres = binding.value.totalCaracteres
        }

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length //length conta quantos caracteres tem no texto
        let textoAjustado = ''

        if(tamanhoTextoOriginal > totalCaracteres) {
            //vamos diminuir o texto em 25 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, (totalCaracteres - 3)) + '...'
        }else {
            //vamos manter o texto original
            textoAjustado = textoOriginal
        }

        el.innerText = textoAjustado

        /*
        el.style.color = 'red'
        el.style.fontSize = '150%'

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length //length conta quantos caracteres tem no texto
        let textoAjustado = ''
        console.log('texto original: ', textoOriginal)
        console.log ('tamanha texto original: ', tamanhoTextoOriginal)

        if(tamanhoTextoOriginal > 25) {
            //vamos diminuir o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, 22) + '...'
        }else {
            //vamos manter o texto original
            textoAjustado = textoOriginal
        }

        el.innerText = textoAjustado


        console.log('A diretiva foi aplicada com sucesso')

        Todo o código está comentado pois representa apenas a criação com o elemento el, sem o binding

        */
    }
}