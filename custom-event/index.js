const counterEl = document.querySelector("#counter");

/*
 * “counter-change” koyduğumuz bu CustomEvent her dispatch edildiğinde counterEl e 
 * bu eventi dinlemesi için bir görev verildi.
*/
counterEl.addEventListener("counter-change", (e) => {
  e.target.innerHTML = e.detail.count;
});

/*
 * CounterChange fonksiyonu oluşturup parametre olarak type ekliyoruz. 
 * Gelen tipe göre counter arttırma ya da azaltma yapmak için.  
 */
function counterChange(type) {
  switch (type) {
    case "increment":

    /*
    * Her iki type için seçtiğimiz counterEl elementi için adı ‘counter-change’ 
    * olan bir CustomEvent dispatch ediyoruz 
    */
      counterEl.dispatchEvent(
        new CustomEvent(
          "counter-change",
          {
            /*
            * CustomEvent ile data geçmek için detail key ini kullanır. 
            * Bu yüzden detail içerisinde ben count diye bir property gönderilir. 
            */
            detail: {
              count: Number(counterEl.innerHTML) + 1,
            },
          },
          false
        )
      );
      break;
    case "decrement":
      counterEl.dispatchEvent(
        new CustomEvent(
          "counter-change",
          {
            detail: {
              count: Number(counterEl.innerHTML) - 1,
            },
          },
          false
        )
      );
    default:
      break;
  }

}