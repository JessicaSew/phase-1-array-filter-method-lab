// Code your solution here
function findMatching(drivers, searchValue) 
{ 
   const nameOf =  drivers.filter( drivers => drivers.toUpperCase() === searchValue.toUpperCase()) 
     return nameOf
}

function fuzzyMatch(drivers, queryValue) 
{
  const driverLetter = drivers.filter(drivers => drivers.startsWith(queryValue))
  return driverLetter
}

function matchName(drivers, nameValue)
{
const driverObject = drivers.filter(drivers => drivers.name === nameValue)
return driverObject
}