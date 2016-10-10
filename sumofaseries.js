function GetSum( a,b )
{
   var sorted = [a,b];
   var result = 0;
   sorted.sort(function(a, b){return a-b});
  for (;sorted[0] <= sorted[1]; sorted[0]++){
   	 result += sorted[0];
   }
   return result;
}
