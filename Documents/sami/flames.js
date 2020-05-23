first_array = new Array();
second_array = new Array();
final_string = new Array();
 
function compare(form)
{
 name1 = (form.fname.value);
 name2 = (form.sname.value);
 
 first_array = name1.toLowerCase().replace(/ /gi,"").split('');
 second_array = name2.toLowerCase().replace(/ /gi,"").split('');
 
 for(i in first_array)
 {
  for(j in second_array)
  {
   if((first_array[i] == second_array[j]) && (first_array[i]!='') && (second_array[j]!=''))
   {
    first_array[i] = '';
    second_array[j] = '';
   }
  }
 }
 
for(i=0; i<=first_array.length; i++)
{
 if(first_array[i]=='')
 {
  first_array.splice(i,1);
 }
}
 
for(j=0; j<=second_array.length; j++)
{
 if(second_array[j]=='')
 {
  second_array.splice(j,1);
 }
}
final_string = first_array.toString().replace(/,/gi,"") + second_array.toString().replace(/,/gi,"");
l = final_string.length;
result(l);
}
 
function result(n)
{
 string = "flames";
 number = n;
 process = new Array();
 
 while(string.length>=2)
 {
  var j=0;
  process = [];
  position = number%string.length;
 
  if(position!=0)
  {
   for(i=position+1; i<=string.length; i++)
   {
    process[j] = string.charAt(i-1);
    j++;
   }
 
   for(i=0; i<=position-2; i++)
   {
    process[j] = string.charAt(i);
    j++;
   }
   string = process.toString().replace(/,/gi,"");
  }
  else
  {
   string = string.slice(0,-1);
  }
 }
 display(string);
}
 
function display(s)
{
 if(s=='f')
 {
  document.getElementById("result").innerHTML="the relation is "+name1+" and "+name2+"  is Friend";
 }
 if(s=='l')
 {
  document.getElementById("result").innerHTML="the relation is "+name1+" and "+name2+"  is Love";
 }
 if(s=='a')
 {
  document.getElementById("result").innerHTML="the relation is "+name1+" and "+name2+" is Affectionate";
 }
 if(s=='m')
 {
  document.getElementById("result").innerHTML="the relation is "+name1+" and "+name2+" is Marriage";
 }
 if(s=='e')
 {
  document.getElementById("result").innerHTML="the relation is "+name1+" and "+name2+" is Enemy";
 }
 if(s=='s')
 {
  document.getElementById("result").innerHTML="the relation is "+name1+" and "+name2+" is Sister";
 }
}
 
function clr(form)
{
 form.fname.value="";
 form.sname.value="";
 document.getElementById("result").innerHTML="";
}
