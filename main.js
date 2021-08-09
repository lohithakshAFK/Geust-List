names = [];
function add_name(){  
  
    var array_value = "";
}

function show_names(){
    var htmldata;
    var item = document.getElementById("input_name").value;
    names.push(item);
    var array_value= "";
    for( i=0;  i<names.length; i++){
    console.log(names[i]);
    array_value= array_value+names[i]+"<br>";
    }
    document.getElementById("show").innerHTML = array_value;
    }

    function sort_names(){
       sorted = names.sort();
       document.getElementById("sort_names_display").innerHTML = sorted;
    }

    function search()
{
	var s= document.getElementById("search_names").value;
	var found=0;
	var j;
	for(j=0; j<names.length; j++)
		{
			if(s==names[j]){
				found=found+1;
			}	
		}
	document.getElementById("search_display").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}