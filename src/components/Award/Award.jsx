import s from './Award.module.css';

export const Award = ({ award }) => {
    let imgSrc;

    award.imageUrl === null ? imgSrc = 'https://pngimg.com/uploads/award/award_PNG44.png' : imgSrc = award.imageUrl;    //если апи возвращает пустое изображение награды, вставляется дефолтная картинка

    console.log('src ', imgSrc);
    return (
        <div className={s.award__wrapper}>
            <div className={s.award__imgWrapper}>
                <img src={imgSrc} alt='award img' className={s.award__img} />
            </div>
            <div className={s.award__desc}>
                <p className={s.award__name}>{award.name}</p>
                <p className={s.award__nominationName}>'{award.nominationName}'</p>
                <p className={s.award__year}>{award.year}</p>
            </div>
        </div>
    );
}