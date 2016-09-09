// ==UserScript==
// @name         Atualiza SOLMAN 0.1.2
// @namespace    https://github.com/gabrieltr/AtualizaSolman/
// @version      0.1.2
// @description  Atualizar dados do solman
// @author       Gabriel Lucas de Toledo Ribeiro
// @match        *solman.castgroup.com.br*/sap(*=)*
// @homepageURL  https://github.com/gabrieltr/AtualizaSolman/
// @supportURL   https://github.com/gabrieltr/AtualizaSolman/
// @updateURL    https://openuserjs.org/meta/gabrielgabrieltr/Atualiza_SOLMAN.meta.js
// @icon         http://solman.castgroup.com.br:8000/sap/bc/bsp/sap/thtmlb_styles/sap_skins/nova/images/logo_sap.png
// @grant        none
// ==/UserScript==

(function() {

    'use strict';
    console.debug("Atualizando a cada 20 segundos...");
    function atualiza(){
        try{
            console.debug(Date.now() + " Atualizando... ");
            var crmfrm = document.getElementById('CRMApplicationFrame');
            console.debug("CRMApplicationFrame="+crmfrm);
            if(crmfrm!==null){
                var workaf = crmfrm.contentDocument.getElementById("WorkAreaFrame1");
                console.debug("WorkAreaFrame1="+workaf);
                if(workaf !== null){
                    var btn = workaf.contentDocument.getElementById("C27_W89_V90_V92_Refresh");
                    console.debug("C27_W89_V90_V92_Refresh="+btn);
                    if(btn !== null){
                        btn.click();
                    }
                }
            }
        }catch(e){
            console.debug("ERRO: "+e);
        }
        setTimeout(atualiza, 20000);
    }
    atualiza();
})();
