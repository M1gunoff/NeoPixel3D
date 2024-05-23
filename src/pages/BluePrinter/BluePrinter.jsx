import './BluePrinter.css'
import BlueHeader from '../../../src/components/BluePrinter/BlueHeader/BlueHeader';
import BlueHome from '../../../src/components/BluePrinter/BlueHome/BlueHome'
import Description from '../../components/BluePrinter/BlueDescription/BlueDescription';
import BlueCharacteristics from '../../components/BluePrinter/BlueCharacteristics/BlueCharacteristics';
import Spheres from '../../components/BluePrinter/Spheres/BlueSpheres'
import Quality from '../../components/BluePrinter/Quality/Quality';
import Speed from '../../components/BluePrinter/Speed/Speed';
import Interface from '../../components/BluePrinter/Interface/Interface';
import Vlare from '../../components/BluePrinter/Vlare/Vlare';
import Examples from '../../components/BluePrinter/Examples/Examples';
import Convenience from '../../components/BluePrinter/Convenience/Convenience';
import Consultation from '../../components/HomePage/Consultation/Consultation';
import PrinterFooter from '../../components/BluePrinter/PrinterFooter/PrinterFooter';

const BluePrinter = () => {
  return (
    <>
        <div id="home" className="bluePrinter">
            <div className="bluePrinter__container">
                <BlueHeader/>
                <BlueHome/>
            </div>
        </div>
        <Description/>
        <BlueCharacteristics/>
        <Spheres/>
        <Quality/>
        <Interface/>
        <Vlare/>
        <Examples/>
        <Convenience/>
        <Speed/>
        <Consultation/>
        <PrinterFooter/>
    </>
  )
}

export default BluePrinter

