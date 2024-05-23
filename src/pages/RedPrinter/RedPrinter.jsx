import './RedPrinter.css'
import RedHeader from '../../../src/components/RedPrinter/RedHeader/RedHeader';
import RedHome from '../../../src/components/RedPrinter/RedHome/RedHome'
import Description from '../../components/RedPrinter/RedDescription/RedDescription';
import Spheres from '../../components/BluePrinter/Spheres/BlueSpheres'
import Characteristics from '../../components/BluePrinter/BlueCharacteristics/BlueCharacteristics';
import Quality from '../../components/RedPrinter/RedQuality/RedQuality';
import RedInterface from '../../components/RedPrinter/RedInterface/RedInterface';
import Vlare from '../../components/RedPrinter/RedVlare/RedVlare';
import Examples from '../../components/BluePrinter/Examples/Examples';
import Convenience from '../../components/BluePrinter/Convenience/Convenience';
import Speed from '../../components/BluePrinter/Speed/Speed';
import Consultation from '../../components/HomePage/Consultation/Consultation';
import PrinterFooter from '../../components/BluePrinter/PrinterFooter/PrinterFooter';

const RedPrinter = () => {
  return (
    <>
      <div id="home" className="redPrinter">
        <div className="redPrinter__container">
          <RedHeader/>
          <RedHome/>
        </div>
      </div>
      <Description/>
      <Characteristics/>
      <Spheres/>
      <Quality/>
      <RedInterface/>
      <Vlare/>
      <Examples/>
      <Convenience/>
      <Speed/>
      <Consultation/>
      <PrinterFooter/>
    </>
  )
}

export default RedPrinter
