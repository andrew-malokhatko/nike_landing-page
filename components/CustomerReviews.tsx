import { reviews } from "@/constants"
import ReviewCard from "./ReviewCard"

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center font-bold text-4xl'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <p className='font-montserrat text-slate-gray text-center mt-4'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col max-lg:gap-14'>
        {reviews.map((item)=>(
          <ReviewCard key={item.customerName} {...item}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews