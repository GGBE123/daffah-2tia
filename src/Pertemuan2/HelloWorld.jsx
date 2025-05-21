export default function HelloWorld(){
    const propsUserCard = {
        nama: "Karot",
        nim: "500000",
        tanggal:"2025-02-02"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar Reactjs</p>
            <GreetingBinjai />
            <QuoteText/>
            <UserCard
            nama="Gon"
            nim="194505"
            tanggal={new Date().toLocaleDateString()}
            />
            <UserCard {...propsUserCard}/>
            <img src="lockin.jpg" alt="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}