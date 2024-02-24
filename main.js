let input = document.querySelector('#txt-entrada');
let output = document.querySelector('#txt-saida');

function criptografar() {
    let texto = input.value;
    let cript = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    output.innerHTML = '<textarea name="texto-saida" class="txt-saida" id="txt-saida" readonly placeholder="Aguardando texto" oncontextmenu="return false;">' + cript + '</textarea>'
    + '<button onclick="copiarTexto()" class="btn-copiar">Copiar</button>'  + ' <button onclick="limpar()" class="btn-limpar" id="btn-limpar">Limpar</button>'
}

function descriptografar() {
    let texto = input.value;
    let decript = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    output.innerHTML = '<textarea name="texto-saida" class="txt-saida" id="txt-saida" readonly placeholder="Aguardando texto" oncontextmenu="return false;">' + decript + '</textarea>'
    + '<button onclick="copiarTexto()" class="btn-copiar">Copiar</button>' + ' <button onclick="limpar()" class="btn-limpar" id="btn-limpar">Limpar</button>'
};

function copiarTexto() {
    let textoCopy = output.querySelector('textarea');
  
    textoCopy.select();
    document.execCommand('copy');

    if (textoCopy.value == '') {
        alert('Nenhum texto copiado');
    } else {
        alert('Texto copiado');
    }
};

function limpar() {
    let txt = output.querySelector('textarea');

    txt.select();
    txt.value = '';
    textoCopy.value = '';
};