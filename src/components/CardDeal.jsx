import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        sndasj ndh vd vdksjv powfn jnsvd sidvbid vsdiowef oivnd v vsodvns vsvosndvn sdvknsdjvsuds vsdjvjsdvsd vsdjvksdjvksd vkjsdnvjsd vsdkjvsdkvsd vsjdvsjdweowek sdvsdvjsdv sdjndifb xvvnxcvrigr svcsov.
      </p>

      <Button styles={`mt-10`}/>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='billing' className='w-[100%] h-[100%]'/>
      
    </div>
  </section>
)

export default CardDeal