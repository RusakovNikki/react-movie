import s from './Award.module.css';

export const Award = ({ award }) => {
    return (
        <div className={s.award__wrapper}>
            <div className={s.award__imgWrapper}>
                <img src={award.imageUrl} alt='award img' className={s.award__img} />
            </div>
            <div className={s.award__desc}>
                <p className={s.award__name}>{award.name}</p>
                <p className={s.award__nominationName}>'{award.nominationName}'</p>
                <p className={s.award__year}>{award.year}</p>
            </div>
        </div>
    );
}