import {CustomerReviews, Footer, Hero, Nav, PopularProducts,
   Services, SpecialOffer, Subscribe, SuperQuality}
   from "@/components"

export default function Home() {
  return (
    <main className="relative">
        <section  id="home" className="xl:padding-l wide:padding-r padding-b">
          <Hero/>
        </section>
        
        <section id="products" className="padding">
          <PopularProducts/>
        </section>
        
        <section id="info" className="padding">
          <SuperQuality/>
        </section>
        
        <section className="padding-x py-10">
          <Services/>
        </section>
        
        <section className="padding">
          <SpecialOffer/>
        </section>
        
        <section className="bg-pale-blue padding">
          <CustomerReviews/>
        </section>
        
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        
        <section className="padding-x padding-t bg-black">
          <Footer/>
        </section>
    </main>
  );
}
