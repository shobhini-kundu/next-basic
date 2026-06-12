import CreateUser from "@/components/homeComponent/CreateUser";
import Loops from "@/components/homeComponent/Loops";
import Image from "next/image";

export default function Home() {
  return (<>
  <CreateUser/><hr className="my-20"/>
  <Loops />
</>);
}
