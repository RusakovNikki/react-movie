import s from './About.module.css';

export const NotFoung = () => {
    return <div className={s.about__data}>
        <p className={s.about__noData}>Нет информации о бюджете для данного фильма 😢</p>
    </div>
}