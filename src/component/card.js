// import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'
export default function Card(props){

   let badgeText
   if(props.openSpots===0)
      {
         badgeText='Sold Out'
      }
   else if(props.location==="Online")
   {
      badgeText='Online'
   }

   return(
      <div className='card'>
         {badgeText && <div className='card-badge'>{badgeText}</div>}
         <img src={require(`../images/${props.coverImg}`)} className='card-image'/>
         <div className='card-stats'>
            <img src={star}/>
            <span>{props.stats.rating}</span>
            <span>({props.stats.reviewCount})</span>
            {!badgeText && <span>• {props.location}</span>}
         </div>
         <p className='card-title'>{props.title}</p>
         <p><span className='bold'>from ${props.price}</span> / person</p>
      </div>
   )
}