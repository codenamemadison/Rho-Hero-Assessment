import Hero from "/components/Hero/Hero.jsx"
import { heroSections } from '../data/heroData.js'

export default function Demo() {
  return (
    <div>
      <h1>Hero Component Demo - Madison Shimbo</h1>
      <p>Your Hero component should render the CMS data below. Map over the heroSections array and display each hero with different layouts:</p>

      <div 
        style={{ 
            padding: '2rem', 
            backgroundColor: '#f5f5f5', 
            margin: '2rem 0', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem' }}>
        {heroSections.map(sectionData => {
          const {id, title, backgroundImage, theme} = sectionData
          let description = sectionData.description
          let placeTitle = sectionData.layout.titlePlacement
          let placeDescription = sectionData.layout.descriptionPlacement
          if (sectionData.id == "hero-1") { // hero #1 - USES DEFAULT PLACEMENT
            placeTitle = ""
            placeDescription = ""
          } else if (sectionData.id == "hero-2") { // hero #2 - USES DIFFERENT LAYOUT VALUES
            placeTitle = "start end"
            placeDescription = "end start"
          } else { // hero #3 - USES LONGER TEXT
            description = description.repeat(5)
          }
          return (
            <Hero 
              key={id}
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              title={title}
              description={description}
              placeTitle={placeTitle}
              placeDescription={placeDescription}
              theme={theme}
            />
        )})}
      </div>
    </div>
  );
}
