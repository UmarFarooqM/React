export default function Usercard({user}){
    return(
        <div id="divdetails">
            <h1>name:{user.name}</h1>
            <p>email:{user.email}</p>
            <p>city:{user.address.city}</p>
        </div>
    )
}