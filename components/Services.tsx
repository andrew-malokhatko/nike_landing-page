import { services } from '@/constants'
import { ServiceCard } from '.'

const Services = () => {
  return (
    <section className='max-container flex flex-col justify-center flex-wrap gap-9'>
      <h2 className='text-4xl font-palanquin font-bold text-center'>We <span className='text-orange-500'>Guarantee</span> You:</h2>
      <div className='flex m-auto justify-center flex-wrap gap-9'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service}/>
        ))}
      </div>
    </section>
  )
}

export default Services