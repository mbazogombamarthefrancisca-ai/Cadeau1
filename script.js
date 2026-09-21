document.getElementById("btn").addEventListener("click", function(){
    let nom = document.getElementById("nom").value;
    if(nom == ""){ alert("Mets ton nom"); return; }
    let numero = "+24177985598";
    let msg = "Coucou Mme ENS ! C'est " + nom + ", je confirme pour ta soirée du 07 Octobre";
    window.location.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(msg);
});