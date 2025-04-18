// Code EyesOnMe Component Here
// import React from 'react';

// function EyesOnMe(){
//     function handleFocus() {console.log('Good!')} 
//     function handleBlur () {console.log('Hey! Eyes on me!')}
//     return(
//         <div>
//         <button onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
//         </div>
//     )
// }
// export default EyesOnMe;



import React from 'react';

function EyesOnMe() {
  function handleFocus() {
    console.log('Good!');
  }

  function handleBlur() {
    console.log('Hey! Eyes on me!');
  }

  return (
    <button 
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;