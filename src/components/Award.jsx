import s from '../css/Award.module.css';

const Award = (props) => {
    return (
        <div className={s.award__wrapper}>
            <div className={s.award__imgWrapper}>
                <img src={props.imageUrl} alt="award img" className={s.award__img} />
            </div>
            <div className={s.award__desc}>
                <p className={s.award__name}>{props.name}</p>
                <p className={s.award__nominationName}>"{props.nominationName}"</p>
                <p className={s.award__year}>{props.year}</p>
            </div>
        </div>
    );
}

export default Award;
