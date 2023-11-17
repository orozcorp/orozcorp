import dynamic from "next/dynamic";
const Section0 = dynamic(() => import("./(landing)/Section0"));
const Section1 = dynamic(() => import("./(landing)/Section1"));
const Section2 = dynamic(() => import("./(landing)/Section2"));
const Products = dynamic(() => import("./(landing)/Products"));
const Section3 = dynamic(() => import("./(landing)/Section3"));
const Resenas = dynamic(() => import("./(landing)/Resenas"));
const Contactanos = dynamic(() => import("./(landing)/Contactanos"));
export default function index() {
  return (
    <>
      <Section0 />
      <Section1 />
      <Section2 />
      <Products />
      <Section3 />
      <Resenas />
      <Contactanos />
    </>
  );
}