function display(val){
    document.getElementById("result").value+=val
    }
    
    function solve(){
        var x =document.getElementById("result").value
        var y =eval(x)
        document.getElementById("result").value=y
    }
    
    function clear(){
        document.getElementById("result").value= ""
    }
