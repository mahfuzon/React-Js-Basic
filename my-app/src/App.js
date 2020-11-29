import './App.css';

function App() {
  return (
    <div className="ParentBox">
      <Produkfoto></Produkfoto>
      <ProdukInfo name="Adidas Hitam Sneaker yahaha" title="Sneaker"></ProdukInfo>
      <ReviewItem></ReviewItem>
    </div>
  );
}

function Produkfoto() {
  return (
    <div className="Foto">
      <center><img src="download.jpg" /></center>
    </div>
  );
}

function ProdukInfo(props) {
  const { title, name } = props;
  const ListBenefit = ['bagus', 'ringan', 'mantap', 'cerah', 'hahaha'];
  const benefit = ListBenefit.map((e) => <li>{e}</li>);
  return (
    <div className="Deskripsi">
      <p className="Cate">{title}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR 73.000</p>
      <CekDiskon isDiscount='comming'></CekDiskon>
      <p className="Info">ashdgshdv hdvhgsvdhsgvh havdhgsdvhs hvdghsdvsv hvdhgsvdhs vdshvxs
      cbdhcvdghvchd sdvsgdvhsgv sdgvsghdv hjvhsvdc hvdhgsvds hvscsvc hsvcgsvc
      vdsvdghsdvx sdhsvdghs hjvscsvc shcvsvcghsv sghvcgsvc ghsvcgsvc ghsvchgsv ghvschsv
      </p>
      <ul>{benefit}</ul>
      <a href="#" onClick={(e) => TambahProduk(name, e)}>Add Produk</a>
    </div>);
}

function TambahProduk(e) {
  return alert("Success membeli " + e);
}

function CekDiskon(props) {
  const { isDiscount } = props;
  if (isDiscount == 'yes') {
    return (
      <p>Diskon 50%</p>
    );
  } else if (isDiscount == 'comming') {
    return (
      <p>Dison akan tiba .....</p>
    );
  } else {
    return (
      <p>Belum ada discount</p>
    );
  }
}

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

export default App;
