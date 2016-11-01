// ==UserScript==
// @name         Atualiza SOLMAN
// @namespace    https://github.com/gabrieltr/AtualizaSolman/
// @version      0.1.6
// @description  Atualizar dados do solman
// @author       Gabriel Lucas de Toledo Ribeiro
// @match        *solman.castgroup.com.br*/sap(*=)*
// @homepageURL  https://openuserjs.org/scripts/gabrielgabrieltr/Atualiza_SOLMAN
// @supportURL   https://openuserjs.org/scripts/gabrielgabrieltr/Atualiza_SOLMAN
// @updateURL    https://openuserjs.org/install/gabrielgabrieltr/Atualiza_SOLMAN.user.js
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
            //console.debug("C27_W89_V90_V92_Refresh="+btn);
            if(btn !== null && btn.size()>=1){
                btn.hide(250);
                btn.click();
                var texto = "Atualizando: " + AtualizarContador++;
                console.debug(Date.now() + texto);
                var linka=btn.parent().find('b');
                linka.html(texto);
                btn.show(400);
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
