var SystechSkulJsLib = SystechSkulJsLib || {};

SystechSkulJsLib.grid = {};

SystechSkulJsLib.showTable = function(){
    var me = this;

   /* var tableContent = `<table id="customers"><tr><th>Name</th><th>Address</th></tr>`;
    me.data.forEach(row => {
        tableContent += `<tr><td>${row.name}</td><td>${row.address}</td></tr>`;
    });
    tableContent += `</table>`;

    document.getElementById('content').innerHTML = tableContent;

}*/
 var tableContent = `<table id="${me.contentRender}"><tr>`;
    me.gridColumns.forEach(col => {
    tableContent+= ``<th>col.header</th>`;

});
tableContent+= `</tr>`;

    me.gridData.f-----------orEach(row => {
     tableContent += `<tr>`;
    me.grid.columns.forEach(col => {
    tableContent+= <td>row[col.dataIndex]</td></tr>`;

    });

    tableContent += `</table>`;

    document.getElementById('content').innerHTML = tableContent;

}

SystechSkulJsLib.loadData = function(){
    var me = this;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == XMLHttpRequest.DONE){
            if (xhr.status == 200){
               SystechSkulJsLib.data = eval('(' + xhr.responseText + ')');
               SystechSkulJsLib.showTable();
            }
        }
    }

    xhr.open('get', me.dataUrl, true);
    xhr.send();

}

