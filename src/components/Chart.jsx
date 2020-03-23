import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  return (
    <div>
      <Line data={data} />
      <p>
        Fonte: <a href="https://github.com/peixebabel/COVID-19">Peixe Babel</a>
      </p>
    </div>
  );
};

export default Chart;
