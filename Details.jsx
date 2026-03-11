import { useEffect, useState } from "react";
import Cards from "../Elements/Cards/Cards";
import { consumptionMetrics } from "../../utils/constants/constant";
import { groupByDay } from "../../utils/reading";
import useConsumption from "../../hooks/useConsumption";

const Details = ({ readings }) => {
  const [cardProperities, setCardProperities] = useState({
    cost: 0,
    consumption: 0,
    footprint: 0,
  });

  const [days, setDays] = useState(30);

  //calculation logic for cardProperities
  const { computatedCost, computedConsumption, totalFootPrint } =
    useConsumption({ readings, days });

  useEffect(() => {
    setCardProperities((prevState) => ({
      ...prevState,
      cost: computatedCost,
      consumption: computedConsumption,
      footprint: totalFootPrint,
    }));
  }, [computatedCost, computedConsumption, totalFootPrint]);

  return (
    <div className="cardContainer">
      {consumptionMetrics.map((metric, index) => {
        return (
          <Cards
            key={index}
            metricText={metric}
            metricValue={cardProperities[metric]}
          />
        );
      })}
    </div>
  );
};

export default Details;
