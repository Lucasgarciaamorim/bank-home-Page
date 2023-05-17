interface ICard {
    id: number;
    paragraph: string;
    details: string;
}

const Card = ({ id, paragraph, details }: ICard) => {
    return (
        <>
            <h1>Card {id} </h1>
            <p>{paragraph}</p>
            <p>{details}</p>
        </>
    );
};

export default Card;
