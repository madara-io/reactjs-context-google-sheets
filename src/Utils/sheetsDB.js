const sheetsToArray = (data) => {  
  let i, j, ilen, jlen
  let dataSafe = []
  let columnNames = []
  if (undefined !== data && data.length){
    for(let key in data[0]){
      if(/^gsx/.test(key)){
        columnNames.push(key.replace("gsx$",""));
      }
    }
    
    for(i = 0, ilen =  data.length ; i < ilen; i++) {
      let source = data[i];
      let item = {};
      for(j = 0, jlen = columnNames.length; j < jlen ; j++) {
        let cell = source[ "gsx$" + columnNames[j] ];
        item[columnNames[j]] = cell.$t;
      }
      dataSafe.push(item);
    }
  }
  return dataSafe
};

export { sheetsToArray }