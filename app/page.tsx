
import About from './widgets/shared/components/About'

import Herosection from './widgets/shared/components/Herosection'
import Projects from './widgets/shared/components/Projects'
import Reviews from './widgets/shared/components/Reviews'
import Services from './widgets/shared/components/Services'

const page = () => (  
  <>
    <Herosection/>
    <div id="about">
    <About/>
    </div>
    <Services/>
    <Projects/>
    <Reviews/>
  </>
)

export default page
