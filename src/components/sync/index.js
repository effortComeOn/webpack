// import lodash from "lodash-es"
import { isArray } from "lodash-es"
import item from "./sync.css"

const sync = function(){
  console.log('sync');
  // document.getElementById("app").innerHTML = `<h1 class="${item.test}">hello zj leran webpack</h1>`;

}

const isArrayFunc = function(args){
  // console.log(lodash.isArray(args))
  console.log(isArray(args))
}
export {
  sync,
  isArrayFunc
}