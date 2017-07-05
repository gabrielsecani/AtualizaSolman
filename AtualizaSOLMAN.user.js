// ==UserScript==
// @name         Atualiza SOLMAN
// @namespace    https://github.com/gabrieltr/AtualizaSolman/
// @version      0.1.6
// @description  Atualizar dados do solman
// @author       Gabriel Lucas de Toledo Ribeiro
// @match        *solman.castgroup.com.br*/sap(*=)*
// @homepageURL  https://github.com/gabrieltr/AtualizaSolman/
// @updateURL    https://github.com/gabrieltr/AtualizaSolman/raw/master/AtualizaSOLMAN.user.js
// @icon         http://solman.castgroup.com.br:8000/sap/bc/bsp/sap/thtmlb_styles/sap_skins/nova/images/logo_sap.png
// @grant        none
// @require	    http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    //console.debug("Atualizando a cada 30 segundos...");
    var AtualizarContador=1;
    var btn;
    function atualiza(){
        try{
            btn = $('img[alt="Atualizar"]');
            if(btn !== null && btn.size()>=1){
                btn.hide();
                btn.click();
                var texto = "Atualizando: " + AtualizarContador++;
                console.debug(Date.now() + texto);
                var linka=btn.parent().find('b');
                linka.html(texto);
                btn.show();
            }else{
                console.debug("botão atualizar nao encontrado neste frame..." + name);
            }
            setTimeout(atualiza, 30000);
        }catch(e){
            console.debug("ERRO: "+e);
        }
    }
    atualiza();
})();
