import Global from "./style/Global";
import { hourSelector, minuteState } from "./atom/atoms";
import { useRecoilState } from "recoil";

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onChangeMinute = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(Number(e.currentTarget.value));
  };

  const onChangeHour = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(Number(e.currentTarget.value));
  };

  return (
    <>
      <Global />
      <input value={minutes} onChange={onChangeMinute} type="number" />
      <input value={hours} onChange={onChangeHour} type="number" />
    </>
  );
};

export default App;
