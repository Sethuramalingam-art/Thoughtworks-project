import { useEffect, useState } from "react";
import { groupByDay, sortByTime } from "../utils/reading";

const useConsumption = ({ readings, days }) => {
  const [computatedCost, setComputatedCost] = useState(1);
  const [computedConsumption, setComputedConsumption] = useState(0);
  const [totalFootPrint, setTotalFootPrint] = useState(0);
  useEffect(() => {
    //calculation logic for cardProperities
    //1= 0.138
    const sortedReadings = sortByTime(groupByDay(readings)).slice(-30);
    const cost = 0.138;
    let tempCost = 0;
    let tempConsumption = 0;
    let tempFootPrint = 0;

    sortedReadings.forEach((reading) => {
      tempCost += reading.value * cost;
      tempConsumption += reading.value;
      tempFootPrint += reading.value * 0.0002532; // Assuming 0.5 kg CO2 per unit of energy consumed
    });
    setComputatedCost(tempCost);
    setComputedConsumption(tempConsumption);
    setTotalFootPrint(tempFootPrint);
  }, [readings, days]);

  return { computatedCost, computedConsumption, totalFootPrint };
};

export default useConsumption;
