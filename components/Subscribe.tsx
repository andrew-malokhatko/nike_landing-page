import { Button } from "."

const Subscribe = () => {
  return (
    <section className="max-container flex justify-evenly max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold text-center">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="flex justify-center items-center lg:max-w-[40%] 
                  w-full max-sm:flex-col gap-5 p-2.5 ">
        <input type="email" placeholder="subscribe@nike.com" className="input border border-slate-gray"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" sectionLink="#about-us" fullwidth={true}/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe