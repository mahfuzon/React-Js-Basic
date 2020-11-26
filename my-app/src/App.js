import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Running";
  return (
    <div class="ParentBox">
      <div class="Foto">
        <center><img src="download.jpg"/></center>
      </div>
      <div class="Deskripsi">
        <p class="Cate">{title}</p>
        <h1 class="Title">Sneaker Hitam</h1>
        <p class="Price">IDR 73.000</p>
        <p class="Info">ashdgshdv hdvhgsvdhsgvh havdhgsdvhs hvdghsdvsv hvdhgsvdhs vdshvxs
        cbdhcvdghvchd sdvsgdvhsgv sdgvsghdv hjvhsvdc hvdhgsvds hvscsvc hsvcgsvc
        vdsvdghsdvx sdhsvdghs hjvscsvc shcvsvcghsv sghvcgsvc ghsvcgsvc ghsvchgsv ghvschsv</p>
      </div>
    </div>
  );
}

export default App;
