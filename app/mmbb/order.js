import { observable, action } from "mobx";
class Ldata{
    @observable aa;
    @observable List;
    constructor(){ 
    this.aa='2345'
    this.aaList=[
        {
         xxm:'mark',
         ddh:'16787645679',
         ddz:'shanxiyuncheng',
         ggs:'DFG',
         start:'2019-6-6',
         end:'2019-6-8'
        }
    ]
   
    }

  oook=(e)=>{
     this.aaList.push(e)
  }  
    
  

}
const lData=new Ldata()
export {lData}
