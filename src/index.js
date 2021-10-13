
function whatIsInAName(collection, source) {
    const arr = [];
    console.log(arr)
    //to get key
    const keys = Object.keys(source)
    console.log(keys)
    // We want to loop through of 'collection' array
    // for (let i=0; i<collection.length; i++ )
    for (const obj of collection){
      let hasAllKeyValuePairs = true;
      for (const key of keys){
          if (obj[key]!==source[key]) {
            hasAllKeyValuePairs=false;
            break;
          }
  
      }
              if (hasAllKeyValuePairs){
            arr.push(obj)
          }
    }
  
    return arr;
  }
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))