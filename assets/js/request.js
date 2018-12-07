class  Request{

    constructor(urlTable,urlBreakdown,type){

        this.tableRequest(urlTable,urlBreakdown,type);

    }

    tableRequest(urlTable,urlBreakdown,type) {
    
        $(document).ready( function() {
            
            $.ajax({
    
                url:urlTable,
    
                method:"GET",
    
                data:"",
    
                success: function(response){

                    if(type==0){

                        var tableBreakdown = new TableBreakdown("#datatable-buttons",response,["FACTOR HUMANO","GASTOS GENERALES"]);

                        $(".table-breakdown").click(function(){
        
                            var value = $(this).attr('id');

                            urlBreakdown+="/";

                            urlBreakdown+=value;
                
                            $.ajax({
                
                                url:urlBreakdown,
                
                                method:"GET",
                    
                                data:"",

                                beforeSend:function(){

                                    console.log(urlBreakdown);

                                },
                
                                success:function(response){
                
                                    alert(response);
                
                                }
                
                            });
                
                        });

                    }

                    else if(type==1){

                        var tableReport = new TableReport("#datatable-buttons",response);

                    }

                    else{

                        var tableSingle = new TableSingle("#datatable-buttons",response);

                    }
    
                }
    
            });
    
        });
        
    }


}


