import style from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={style["loader-container"]}>
      <span className={style.loader}></span>
    </div>
  );
};
