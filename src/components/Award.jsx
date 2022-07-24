const Award = (props) => {
    return (
        <div className="award__wrapper">
            <div className="award__img-wrapper">
                <img src={props.imageUrl} alt="award img" className="award__img" />
            </div>
            <p className="award__name">{props.name}</p>
            <p className="award__nominationName">{props.nominationName}</p>
            <p className="award__year">{props.year}</p>
        </div>
    );
}

export default Award;
