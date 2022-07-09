/* Label: */
/*  */
array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];

forRancio:
for (let array in array2) {
    if (array = 2){
        for (let array of array1){
            document.write(array + "<br>");
        
            if (array == "maria"){
                continue forRancio;
            }
            document.write(array + "<br>")
        }
    }
    else {
        document.write(array2[array] + "<br>")
    }
}