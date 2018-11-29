class Table{

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

            var mensualidades=line.Meses;

            var meses =[];

            for(var i=0; i<mensualidades.length; i++){

                var mensualidad=mensualidades[i].Mes;

                var mes;

                switch (mensualidad) {

                    case "1": mes="Enero"
                        
                        break;

                    case "2": mes="Febrero"
                        
                        break;

                    case "3": mes="Marzo"
                        
                        break;

                    case "4": mes="Abril"
                        
                        break;

                    case "5": mes="Mayo"
                        
                        break;

                    case "6": mes="Junio"
                        
                        break;

                    case "7": mes="Julio"
                        
                        break;

                    case "8": mes="Agosto"
                        
                        break;

                    case "9": mes="Septiembre"
                        
                        break;

                    case "10": mes="Octubre"
                        
                        break;

                    case "11": mes="Noviembre"
                        
                        break;

                    case "12": mes="Diciembre"
                        
                        break;
                
                    default:

                        break;
                }

                meses.push(mes);

            }

            this.headers.push("Concepto");
            
            meses.forEach(mes => {

                this.headers.push(mes);

            });

            //termina headers, empiezan datos
            this.data.forEach(line => {
                
                var row=[];

                row.push(line.Concepto);

                var mensuales=line.Meses;

                mensuales.forEach(mensual => {
                    
                    var subtotal=mensual.Subtotal;

                    row.push(subtotal);

                });

                this.matrix.push(row);

            });


        }

    }

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

    fullTable(){

        this.table='';
        this.table+=this.head;
        this.table+=this.body;

    }

    printTable(tableId){

        $(tableId).html(this.table);

    }

}