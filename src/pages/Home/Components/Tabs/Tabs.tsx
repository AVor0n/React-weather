import s from "./Tabs.module.scss";

const Tabs = () => {
  return (
    <div className={s.tabs}>
      <div className={[s.tab, s.active].join(" ")}>На неделю</div>
      {/* <div className={s.tab}>На 14 дней</div>
        <div className={s.tab}>На месяц</div> */}
    </div>
  );
};

export default Tabs;
