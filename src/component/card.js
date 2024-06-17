// import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'
export default function Card(props){

   let badgeText
   if(props.item.openSpots===0)
      {
         badgeText='Sold Out'
      }
   else if(props.item.location==="Online")
   {
      badgeText='Online'
   }

   return(
      <div className='card'>
         {badgeText && <div className='card-badge'>{badgeText}</div>}
         <img src={require(`../images/${props.item.coverImg}`)} className='card-image'/>
         <div className='card-stats'>
            <img src={star}/>
            <span>{props.item.stats.rating}</span>
            <span>({props.item.stats.reviewCount})</span>
            {!badgeText && <span>• {props.item.location}</span>}
         </div>
         <p className='card-title'>{props.item.title}</p>
         <p><span className='bold'>from ${props.item.price}</span> / person</p>
      </div>
   )
}