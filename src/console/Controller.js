 const logKey = (e) => {
    // log.textContent += ` ${e.code}`;
    e.preventDefault()
    console.log(e.code)
   }
 
 
 class Controller{

     connect = () => {
        document.addEventListener('keydown', logKey);

    }



}

export default Controller;
