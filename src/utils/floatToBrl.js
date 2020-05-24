
const floatToBrl = (x)  => {
  var brlS =x.toFixed(2)
  brlS =  brlS.replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if(brlS.length - brlS.indexOf(',') !== 3) brlS = brlS + '0'
  return "R$" +brlS
}
export default floatToBrl