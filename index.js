// magic = [8,4,1,9];
// dist = [10,9,3,5];

magic = [3,2,5,4];
dist = [2,3,4,2];

// magic = [8,4,1,9];
// dist = [10,9,3,5];
console.log(optimalPoint(magic,dist));

function optimalPoint (magic, dist) {
  let result = 0, path = 0, allSources = 0, flag = -2, countArray = 0, lengthPath = magic.length, finalFlag = 0;
  
  while ((allSources < lengthPath) && !(countArray === lengthPath) ) {

    result += magic[allSources];
    console.log(`result ${result}`);
    cycleForAladdin(path, allSources, lengthPath, result, magic, dist, countArray, flag );
    allSources++;
    console.log(`flag ${flag}`);
    console.log(`allSources ${allSources}`);
    console.log(`lengthPath ${lengthPath}`);
    console.log(`countArray ${countArray}`);
    // cicloDandoLaVuelta(flag, countArray,lengthPath);
    // reiniciaFlagCuandoNoSeTerminanDeAnalizarTodasLasRutas(flag, allSources, lengthPath);
  }
  // mantieneFlagSRCCuandoCicloEnArrayDaVuelta(finalFlag, flag, lengthPath);
  return flag;
}

function cycleForAladdin(path, allSources, lengthPath, result, magic, dist, countArray, flag ) {
  for ( path = allSources; path < lengthPath && flag != -1; path ++ ) {
    console.log(`path ${path}`);
    if ( result - dist[path] < 0 ) {
      console.log(`flag-1 ${result} - ${dist[path]}`);
      flag = -1;
      result = 0;
      countArray = 0;
      console.log(`countArray flag-1 ${countArray}`);
    }
    else if ( path < lengthPath - 1 ) {
      console.log(`if ${result} - ${dist[path]} + ${magic[path+1]}`);
      result += - dist[path] + magic[path+1];
      flag = allSources;
      countArray++;
      console.log(`countArray ${countArray}`);
    } 
    else if ( path >= lengthPath-1){
      console.log(`path ${path} lengthPath ${lengthPath}`);
      console.log(`second if ${result} - ${dist[path]}`);
      result += - dist[path];
      flag = allSources;
      countArray++;
      console.log(`countArray ${countArray}`);
    }
  }
  return {
    flag: flag, 
    result: result,
    countArray: countArray
  }; 
}

function cicloDandoLaVuelta(flag, countArray,lengthPath) {
  if ( ( flag > 0) && ( countArray < lengthPath) ) {
    this.allSources = 0;
    this.lengthPath =  flag;
    this.finalFlag = 1;
  }
}

function mantieneFlagSRCCuandoCicloEnArrayDaVuelta(finalFlag, flag, lengthPath) { 
  if ( ( finalFlag === 1) && (flag != -1) ) {
    this.flag = lengthPath;
  }
}
function reiniciaFlagCuandoNoSeTerminanDeAnalizarTodasLasRutas(flag, allSources, lengthPath) {
  if ( (flag === -1) && (allSources < lengthPath -1) ) {
    this.flag = -2;
  }
}



// function optimalPoint (magic, dist) {

//   let result = 0, path = 0, allSources = 0, flag = -2, countArray = 0, lengthPath = magic.length, finalFlag = 0;

//   while ((allSources < lengthPath) && !(countArray === lengthPath) ) {

//     result += magic[allSources];

//     for ( path = allSources; path < lengthPath && flag != -1; path ++ ) {
//       if ( result - dist[path] < 0 ) {
//         flag = -1;
//         result = 0;
//       }
//       else if ( path < lengthPath - 1 ) {
//         result += - dist[path] + magic[path+1];
//         flag = allSources;
//         countArray++;
//       } 
//       else if ( path >= lengthPath - 1 ){
//         result += - dist[path];
//         flag = allSources;
//         countArray++;
//       }
//     }
//     allSources++;

//     if ( ( flag > 0) && ( countArray < lengthPath) ) {
//       allSources = 0;
//       lengthPath =  flag;
//       finalFlag = 1;
//     }

//     if ( flag === -1 && allSources < lengthPath -1 ) {
//       flag = -2;
//     }
//   }

//   if ( ( finalFlag === 1) && (flag != -1) ) {
//     flag = lengthPath;
//   }
//   return flag;
// }