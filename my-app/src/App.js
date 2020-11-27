import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="ParentBox">
      <Produkfoto></Produkfoto>
      <ProdukInfo name="Adidas Hitam Sneaker yahaha" title="Sneaker"></ProdukInfo>
    </div>
  );
}

function Produkfoto() {
  return (
    <div class="Foto">
      <center><img src="download.jpg" /></center>
    </div>
  );
}

function ProdukInfo(props) {
  const {title,name} = props;
  return (
    <div class="Deskripsi">
      <p class="Cate">{title}</p>
      <h1 class="Title">{name}</h1>
      <p class="Price">IDR 73.000</p>
      <p class="Info">ashdgshdv hdvhgsvdhsgvh havdhgsdvhs hvdghsdvsv hvdhgsvdhs vdshvxs
      cbdhcvdghvchd sdvsgdvhsgv sdgvsghdv hjvhsvdc hvdhgsvds hvscsvc hsvcgsvc
      vdsvdghsdvx sdhsvdghs hjvscsvc shcvsvcghsv sghvcgsvc ghsvcgsvc ghsvchgsv ghvschsv
    </p>
    </div>);
}

export default App;
