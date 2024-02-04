import style from "./Loader.module.css";
export const Loader = () => {
  return (
    <div data-testid="loader" className={style["loader-container"]}>
      <span className={style.loader}></span>
    </div>
  );
};
