 const logKey = (e) => {
    // log.textContent += ` ${e.code}`;
    e.preventDefault()
    console.log(e.code)
   }
 
 
 const Controller = {

     connect: () => {
        document.addEventListener('keydown', logKey);

    },



}

export default Controller;
