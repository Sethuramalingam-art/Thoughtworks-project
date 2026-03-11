import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar.jsx";
import { EnergyConsumption } from "./EnergyConsumption.jsx";
import Details from "./Details/Details.jsx";
import { getReadings } from "../utils/reading";

export const App = () => {
  const [readings, setReadings] = useState();

  useEffect(() => {
    getReadings().then(setReadings);
  }, []);

  if (!readings) {
    return null;
  }

  return (
    <div className="background shadow-2 flex overflow-hidden">
      <aside className="p3 menuWidth overflow-auto">
        <Sidebar />
      </aside>
      <article className="bg-very-light-grey p3 flex-auto overflow-auto">
        <EnergyConsumption readings={readings} />
        <Details readings={readings} />
      </article>
    </div>
  );
};
