import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Row } from './components/Row';
import { Categories } from './api.js';


export function App() {
 return (
   <div className='overflow-x-hidden w-full h-full'>
    <Header />

    <Banner />

    {Categories.map((category) => {
      return (
        <Row 
          key={category.name} 
          title={category.title}
          path={category.path}
        />
      );
    })}
    </div>
   )
}
