(function(){
    SystechSkulJsLib.loadData.call({
        dataUrl: 'organization'
        grid:{
        columns:[{
                   header: 'Name',
                  columnIndex:'name'
                  },{
                   header: 'Address',
                   columnIndex:'address'
                    },{
                    header: 'Town',
                    columnIndex:'town'
                   } ],
        data:[],


        }
    });
})();