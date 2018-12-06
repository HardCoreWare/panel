class RequestTrigger{

    setUrlParams(){

        this.modulos=["BANCO","CASA","SAVELLA","GRUPO","OPERADORA","SERVICIOS"];

        this.rootUrl="http://35.243.156.112/balanza";

        this.classUrl="/informe";

        this.mensualUrl="/generar";

    }

    createUrlList(){

        this.desgloseUrlList=[];
        this.mensualeUrlList=[];
        this.acumuladoUrlList=[];

        this.modulos.forEach(modulo => {
            
            var desgloseUrl='';
            var mensualUrl='';
            var acumuladoUrl='';

            var paramUrl = '';

            paramUrl += this.anualidad;
            paramUrl += "-";
            paramUrl += this.mes;
            paramUrl += "-";
            paramUrl += modulo;



        });

    }

    setParams(mes,anualidad){

        this.mes=mes;

        this.anualidad=anualidad;

    }

    initRequest(){

        $.ajax({

            url:"back.php",

            method:"GET",

            data:"",

            success:function (response){



            }

        });

    }

}