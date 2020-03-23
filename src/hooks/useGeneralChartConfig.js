import { useEffect, useState, useMemo } from "react";

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const useGeneralChartConfig = dataString => {
  const [arrayData, setArrayData] = useState([]);

  const dataHead = useMemo(
    () => (arrayData.length > 0 && arrayData[0].split(",")) || [],
    [arrayData]
  );

  const dataBody = useMemo(
    () =>
      (arrayData.length > 0 &&
        arrayData.slice(1).map(item => item.split(","))) ||
      [],
    [arrayData]
  );

  const data = useMemo(() => {
    return dataBody.reduce((acc, curr) => {
      curr.forEach((item, index) => {
        if (!acc[index]) {
          acc[index] = [item];
        } else {
          acc[index].push(item);
        }
      });
      return acc;
    }, []);
  }, [dataBody]);

  const datasets = useMemo(
    () =>
      data.reduce((acc, curr, index) => {
        if (index > 0) {
          acc.push({
            label: dataHead[index],
            data: curr,
            backgroundColor: "transparent",
            borderColor: randomColor(),
            borderWidth: 2
          });
        }
        return acc;
      }, []),
    [data, dataHead]
  );

  const chartData = useMemo(
    () => ({
      labels: data[0],
      datasets
    }),
    [data, datasets]
  );

  useEffect(() => {
    if (dataString) {
      setArrayData(dataString.split("\n"));
    }
  }, [dataString, setArrayData]);

  return {
    chartData
  };
};

export default useGeneralChartConfig;
