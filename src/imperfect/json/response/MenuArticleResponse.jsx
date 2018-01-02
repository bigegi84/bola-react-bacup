import ResponJson from "../ResponJson";
import MenuJson from "../MenuJson";
export default class MenuArticleResponse extends ResponJson{
  constructor(){
    super();
    this.data=new MenuJson()
  }
}