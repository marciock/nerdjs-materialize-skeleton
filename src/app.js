import '@webcomponents/custom-elements';
import {Creator} from '../dist/nerdcreator';

import MContainer from '../components/m-container';
import MRow from '../components/m-row';
import MCol from '../components/m-col';
import {MFile} from '../components/m-forms';
import {MNavBar,MNavOpt} from '../components/m-navbar';
import {Mheader} from '../components/m-header';
import {MRowContainer} from '../components/m-row-container';


export class Apps extends Creator{

  
  render(){
   
   
    return (
      `<div>
      <m-navbar text-logo="teste" color="blue">
            <m-nav-opt url="#">Sobre</m-nav-opt>
            <m-nav-opt url="#">Contato</m-nav-opt>
        </m-navbar>

    
        
      
     
        
       
        <m-row-container>
         
           <m-header h="4">Nerdjs - Materialize</m-header>
            
        
          <m-row>
            <m-file id="teste">ARquivo</m-file>
            <button id="bt">teste</button>
          </m-row>

          <m-row>
            

          
          </m-row>
          
         

         
          

          
      </div>
      `
    )
  }
  callBack(){

   M.AutoInit();
    

    
    const bt=this.querySelector('#bt');
    const file=this.querySelector('#teste');
    
    bt.addEventListener('click',()=>{
          console.log(file.value);
    })
  }
 
    
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  /*


  */
  
  
  