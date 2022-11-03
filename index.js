
function vowelcount(Name){
var count =0;
var vowels="aeiou";

for(var i=0;i<Name.length;i++){
    if(vowels.indexOf(Name[i])>-1){
        count++;
    }
}
return(count)
}
vowelcount("Jamaludeen")


