import './App.css'
import Card from './components/Card'
import backgroundImage from './assets/layer4.png'

import ServicesSection from './components/ServicesSection'
import DevelopmentProcess from './components/DevelopmentProcess'
import ProjectsSection from './components/ProjectsSection'
import BitrixDevelopment from './components/BitrixDevelopment'

const App = () => (
  <div>
    <Card
    title='Разработка сайтов'
    imageUrl={backgroundImage}
/>
  <ServicesSection 
  />
  <DevelopmentProcess />
  <ProjectsSection />
  <BitrixDevelopment />
  </div>
)

export default App
