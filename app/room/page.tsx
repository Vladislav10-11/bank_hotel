import Hero from "@/components/room/Hero";
import Standart from "@/components/room/Standart";
import Twin from "@/components/room/Twin";
import { FC } from "react";

const RoomPage: FC = () => {
  return (
    <div>
      <Hero />
      <Standart />
      <Twin />
    </div>
  );
};

export default RoomPage;
