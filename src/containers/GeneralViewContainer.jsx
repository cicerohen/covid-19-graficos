import React from "react";
import View from "../components/View";
import Chart from "../components/Chart";
import useFetch from "../hooks/useFetch";
import useGeneralChartConfig from "../hooks/useGeneralChartConfig";

const GeneralViewContainer = () => {
  const { data, error, fetchData } = useFetch(
    "https://raw.githubusercontent.com/peixebabel/COVID-19/master/data/casos-br-total.csv"
  );

  const { chartData } = useGeneralChartConfig(data);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View title="Gráfico geral(Brasil)">
      <Chart data={chartData} />
    </View>
  );
};

export default GeneralViewContainer;
