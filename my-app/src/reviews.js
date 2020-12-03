import './App.css';

function ReviewItem() {
    // mempersiapkan data dummy
    const users = [
        {
            "id": 1,
            "name": "Mauriska",
            "review": "Harganya murah tapi bukan kaleng-kaleng nih"
        },
        {
            "id": 2,
            "name": "Nara",
            "review": "Harganya murah tapi bukan kaleng-kaleng nih"
        },
        {
            "id": 3,
            "name": "Sandi",
            "review": "Harganya murah tapi bukan kaleng-kaleng nih"
        },
    ];

    const review = users.map((e) =>
        <div className="Item">
            <img src="https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="User">
                <h3>{e.name}</h3>
                <p>{e.review}</p>
            </div>
        </div>);

    return (
        <div className="ReviewBox">
            <h2>Review</h2>{review}
        </div>
    );
}

export default ReviewItem;