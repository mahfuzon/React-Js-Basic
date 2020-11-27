import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ParentBox">
      <Produkfoto></Produkfoto>
      <ProdukInfo name="Adidas Hitam Sneaker yahaha" title="Sneaker"></ProdukInfo>
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

export default App;
