

function ajax() {
    $.ajax({
    type: "get",
    url: "/",
    data: "json",
    dataType: "application/json",
    
    success: function (response) {
        console.log("success");
    

    },
    error:function(){
        console.log("hii");
    }
});
}