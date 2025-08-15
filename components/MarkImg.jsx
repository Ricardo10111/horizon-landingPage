import Image from 'next/image'

const MarkImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`relative overflow-hidden ${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' className='object-cover' />
    </div>
  )
}

export default MarkImg
