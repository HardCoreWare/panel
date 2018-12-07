class TableBreakdown{

    //
    constructor(tableId,jsonData){

        this.readData(jsonData);
        this.decodeData();
        this.tableHeaders();
        this.tableBody();
        this.fullTable();
        this.printTable(tableId);

    }

    //
    readData(jsonData){

        this.data=JSON.parse(jsonData);

    }

    //
    decodeData(){

        // headers, llaves de desglose y matriz de datos
        this.headers = [];
        this.matrix = [];
        this.keyMatrix = [];
        this.size = this.data.length;

        // si el tamano es mayor a 0 parseamos los datos
        if(this.size>0){

            // creamos encabezados
            var line=this.data[0];
            this.headers = [];
            var mensualidades=line.Meses;
            var meses = [];

            // creamos los meses basados en su numero
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
                var keyRow=[];

                row.push(line.Concepto);
                keyRow.push(line.Id_Cuenta);

                var mensuales=line.Meses;

                var superConcepto=line.Super_Concepto;

                if(Super_Concepto=="FACTOR HUMANO"){

                    mensuales.forEach(mensual => {

                        var subtotal=mensual.Subtotal;
                        row.push(subtotal);
                        keyRow.push(mensual.Llave_Desglose);

                    });

                    this.matrix.push(row);
                    this.keyMatrix.push(keyRow);

                }

            });

        }
        // termina el parseado

    }

    tableHeaders(){

        this.head = '';
        this.head += '<thead>';
        this.head += '<tr>';

        this.headers.forEach(header => {
            
            this.head += '<th>';
            this.head += header;
            this.head += '</th>';

        });

        this.head+='</tr>';
        this.head+='</thead>';

    }

    tableBody(){

        this.body='';
        this.body+='<tbody>';

        for(var i=0; i<this.matrix.length; i++){

            var line=this.matrix[i];

            this.body+='<tr>';

            for(var j=0; j<line.length; j++){

                if(j==0){

                    this.body+='<td>';
                    this.body+=this.matrix[i][j];
                    this.body+='</td>';

                }

                else{

                    this.body+='<td>';
                    this.body+='<a class = "table-breakdown" id = "';
                    this.body+=this.keyMatrix[i][j];
                    this.body+='">';
                    this.body+=this.matrix[i][j];
                    this.body+='</a>';
                    this.body+='</td>';

                }

            }

            this.body+='</tr>';

        }

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