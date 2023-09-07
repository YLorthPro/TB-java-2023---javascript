var table = document.getElementById('tab_res');
var tableStr = table.innerHTML;

var reg = /\€/g; 

var newTab = tableStr.replace(reg, "$");
table.innerHTML= newTab;
