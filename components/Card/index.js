import Logo from '../Logo';
import style from './card.module.css';
// import PaymentForm from '../PaymentForm';

const Card = (props) => {
    return (
        <div className={`card ${style.card}`} >
            <Logo className='card-img-top'/>
                <div className={`card-body ${style.cardBody}`}>
                    <h5 className="card-title">{`${props.productName || 'titulo de la tarjeta'}`}</h5>
                    <p className="card-text">{`${props.price || 'precio'}`}</p>
                    <p className="card-text">{`${props.description || 'Descripción'}`}</p>
                    {/* <PaymentForm
                        price={props.price}
                        productName={props.productName}
                        description={props.description}
                    /> */}
                </div>
        </div>
    );
}

export {Card}