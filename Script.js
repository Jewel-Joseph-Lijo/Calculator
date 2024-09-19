let resulton=false
function buttonclick(val){
    if(resulton==true){
        document.getElementById("screen").value=val
        resulton=false
    }else{
        document.getElementById("screen").value+=val
    }
}
function clearscreen(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    resulton=true
}
