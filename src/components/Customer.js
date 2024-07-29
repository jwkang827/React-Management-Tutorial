export default function Customer(props) {
    return (
        <div>
            <CustomerProfile customer={props.customer}></CustomerProfile>
            <CustomerInfo customer={props.customer}></CustomerInfo>
        </div>
    )
}

function CustomerProfile(props) {
    return (
        <div>
            <img src={props.customer.image} alt="profile" />
            <h2>{props.customer.name}({props.customer.id})</h2>
        </div>
    )
}

function CustomerInfo(props) {
    return (
        <div>
            <p>{props.customer.birth}</p>
            <p>{props.customer.gender}</p>
            <p>{props.customer.job}</p>
        </div>
    )

}
