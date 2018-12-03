class  TableRequest{

    constructor(urlTable,urlBreakdown){

        this.tableRequest(urlTable,urlBreakdown);

    }

    tableRequest(urlTable,urlBreakdown) {
    
        $(document).ready( function() {
            
            $.ajax({
    
                url:urlTable,
    
                method:"GET",
    
                data:"",
    
                success: function(response){
    
                    var tableBreakdown = new TableBreakdown("#datatable-buttons",response);

                    $(".table-breakdown").click(function(){
    
                        var value = $(this).attr('id');
            
                        $.ajax({
            
                            url:urlBreakdown,
            
                            method:"GET",
                
                            data:{"req":value},
            
                            success:function(response){
            
                                alert(response);
            
                            }
            
                        });
            
                    });
    
                }
    
            });
    
        });
        
    }




}


