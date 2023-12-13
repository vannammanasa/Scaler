function areaOfTriangle(s1,s2,s3){

  s = (s1+s2+s3) /2 

   /* Now calculating the area */

  areaValue = Math.sqrt(s * ((s-s1) * (s-s2) * (s-s3)));

  return areaValue
}

console.log(areaOfTriangle(5,6,7))