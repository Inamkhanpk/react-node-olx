import React,{Component} from 'react';
import styles from './ItemsStyle.jsx';
 class Items extends Component{
     render(){
         return(
             <div style={styles.itemStyle} >
                 <ul>
                 <li style={styles.list}>
             Mobiles()
             </li>
             <li style={styles.list}>
            Laptops()
            </li>
            <li style={styles.list}>
               Clothes()
               </li>
               <li style={styles.list}>
                Vehiles()
                </li>
                <li style={styles.list}>
                 Accessories()
                 </li>
                 <li style={styles.list}>
                  Property()
                  </li>
                  <li style={styles.list}>
                   Bikes()
                   </li>
                   <li style={styles.list}>
                    Electronics()
                    </li>
                    <li style={styles.list}>
                     Jobs()
                     </li>
                     <li style={styles.list}> 
                     Services()
                     </li>
                     <li style={styles.list}>
                      Business()
                      </li>
                      <li style={styles.list}>
                       Furniture() 
                       </li>
                       <li style={styles.list}>
                       Books()
                       </li>
                       <li style={styles.list}> 
                       Kids()
                       </li>
                       </ul>
             </div>
         )
     }
 }
 export default Items;