class TableReport{

    constructor(tableId,jsonData){

        this.readData(jsonData);
        this.decodeData();
        this.tableHeaders();
        this.tableBody();
        this.fullTable();
        this.printTable(tableId);

    }

    readData(jsonData){

        this.data=JSON.parse(jsonData);

    }

    decodeData(){

        this.headers=[];
        this.matrix=[];
        this.size=this.data.length;

        console.log(this.size);

        if(this.size>0){

            var line=this.data[0];
            this.headers=[];
            var modulos=line.Modulos;

            console.log(modulos);

            this.headers.push("Concepto");
            
            modulos.forEach(modulo => {

                this.headers.push(modulo);

            });

            //termina headers, empiezan datos
            this.data.forEach(line => {
                
                var row=[];

                row.push(line.Concepto);
                var modulares=line.Modulos;

                modulares.forEach(modular => {
                    
                    var subtotal=modular.Subtotal;
                    row.push(subtotal);

                });

                this.matrix.push(row);

            });

        }

    }

    //
    tableHeaders(){

        this.head = '';
        this.head+='<thead>';
        this.head+='<tr>';

        this.headers.forEach(header => {
            
            this.head+='<th>';
            this.head+=header;
            this.head+='</th>';

        });

        this.head+='</tr>';
        this.head+='</thead>';

    }

    //
    tableBody(){

        this.body='';
        this.body+='<tbody>';

        this.matrix.forEach(row => {

           this.body+='<tr>'

            row.forEach(cell => {
                
                this.body+='<td>'
                this.body+=cell;
                this.body+='</td>'

            });

           this.body+='</tr>';

        });

        this.body+='</tbody>'

    }

    //
    fullTable(){

        this.table='';
        this.table+=this.head;
        this.table+=this.body;

    }

    //
    printTable(tableId){

        $(tableId).html(this.table);

    }

}