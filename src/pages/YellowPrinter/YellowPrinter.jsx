import './YellowPrinter.css';
import YellowHeader from '../../../src/components/YellowPrinter/YellowHeader/YellowHeader';
import YellowHome from '../../../src/components/YellowPrinter/YellowHome/YellowHome'
import YellowDescription from '../../components/YellowPrinter/YellowDescription/YellowDescription';
import YellowCharacteristics from '../../components/BluePrinter/BlueCharacteristics/BlueCharacteristics';
import Spheres from '../../components/BluePrinter/Spheres/BlueSpheres';
import YellowQuality from '../../components/YellowPrinter/YellowQuality/YellowQuality';
import YellowInterface from '../../components/YellowPrinter/YellowInterface/YellowInterface/';
import YellowVlare from '../../components/YellowPrinter/YellowVlare/YellowVlare';
import Examples from '../../components/BluePrinter/Examples/Examples';
import Convenience from '../../components/BluePrinter/Convenience/Convenience';
import Consultation from '../../components/HomePage/Consultation/Consultation';
import Speed from '../../components/BluePrinter/Speed/Speed';
import PrinterFooter from '../../components/BluePrinter/PrinterFooter/PrinterFooter';

const YellowPrinter = () => {
  return (
    <>
      <div id="home" className="yellowPrinter">
        <div className="yellowPrinter__container">
          <YellowHeader/>
          <YellowHome/>
        </div>
      </div>
      <YellowDescription/>
      <YellowCharacteristics/>
      <Spheres/>
      <YellowQuality/>
      <YellowInterface/>
      <YellowVlare/>
      <Examples/>
      <Convenience/>
      <Speed/>
      <Consultation/>
      <PrinterFooter/>
    </>
  )
}

export default YellowPrinter
