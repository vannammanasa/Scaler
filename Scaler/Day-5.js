// to get filename extension in javascript

function getFileExtension(fileName){
  result = fileName.split('.').pop()
  return result
}

console.log(getFileExtension('module.js'))
console.log(getFileExtension('name.html'))