class TableBreakdown{

    //
    constructor(tableId,jsonData,superConceptos){

        this.readData(jsonData);
        this.decodeData(superConceptos);
        //this.tableHeaders();
        //this.tableBody();
        //this.fullTable();
        //this.printTable(tableId);

    }

    //
    readData(jsonData){

        this.data=JSON.parse(jsonData);

    }

    //
    decodeData(superConceptos){

        // headers, llaves de desglose y matriz de datos
        this.headers = [];
        this.cluster = [];
        this.keyCluster = [];
        this.size = this.data.length;

        // si el tamano es mayor a 0 parseamos los datos
        if(this.size>0){

            // creamos encabezados
            let line=this.data[0];
            this.headers = [];
            let mensualidades=line.Meses;
            let meses = [];

            // creamos los meses basados en su numero
            for(let i=0; i<mensualidades.length; i++){

                let mensualidad=mensualidades[i].Mes;
                let mes;

                switch (mensualidad) {

                    case "1": mes="Enero"; break;

                    case "2": mes="Febrero"; break;

                    case "3": mes="Marzo"; break;

                    case "4": mes="Abril"; break;

                    case "5": mes="Mayo"; break;

                    case "6": mes="Junio"; break;

                    case "7": mes="Julio"; break;

                    case "8": mes="Agosto"; break;

                    case "9": mes="Septiembre"; break;

                    case "10": mes="Octubre"; break;

                    case "11": mes="Noviembre"; break;

                    case "12": mes="Diciembre"; break;
                
                    default: break;
                }

                meses.push(mes);

            }

            this.headers.push("Concepto");
            
            meses.forEach(mes => {

                this.headers.push(mes);

            });

            for (let i = 0; i < superConceptos.length; i++) {

                let superConcepto = superConceptos[i];

                let matrix=[];

                this.data.forEach(line => {

                    if(line.Super_Concepto == superConcepto){
                    
                        let row=[];
                        let keyRow=[];

                        row.push(line.Concepto);
                        keyRow.push(line.Id_Cuenta);

                        let mensuales=line.Meses;

                        mensuales.forEach(mensual => {

                            let subtotal=mensual.Subtotal;
                            row.push(subtotal);
                            keyRow.push(mensual.Llave_Desglose);

                        });

                        matrix.push(line);

                    }


                });

                this.cluster.push(matrix);

            }

            console.log(this.cluster);

        }
        // termina el parseado

    }

    //
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

    //
    tableBody(){

        this.body='';
        this.body+='<tbody>';

        for(let i=0; i<this.cluster.length; i++){

            let line=this.cluster[i];

            this.body+='<tr>';

            for(let j=0; j<line.length; j++){

                if(j==0){

                    this.body+='<td>';
                    this.body+=this.cluster[i][j];
                    this.body+='</td>';

                }

                else{

                    this.body+='<td>';
                    this.body+='<a class = "table-breakdown" id = "';
                    this.body+=this.keyCluster[i][j];
                    this.body+='">';
                    this.body+=this.cluster[i][j];
                    this.body+='</a>';
                    this.body+='</td>';

                }

            }

            this.body+='</tr>';

        }

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

        console.log(this.table);

        $(tableId).html(this.table);

    }

    
    


}