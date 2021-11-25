import s from "./HomeView.module.css";
import phone from "../icons/phone.png";

const HomeView = () => {
  const logo = phone;
  return (
    <div className={s.homeView}>
      <h1 className={s.title}>Your contacts organizer</h1>
      <img src={logo} alt="phone" className={s.img} />
    </div>
  );
};

export default HomeView;
