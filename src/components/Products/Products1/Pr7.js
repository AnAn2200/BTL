import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';

class SP1 extends React.Component {

  state = {
    products: [
      {
        "_id": "1",
        "title": "Xiaomi Redmi Note 12 Pro 5G",
        "src": [
          "https://thongsokythuat.vn/wp-content/uploads/2023/04/Dien-thoai-Xiaomi-Redmi-Note-12-Pro-5G-2022.jpg",
          "https://vn-test-11.slatic.net/p/1ec5f459d7bbe4b1a87f90fecc7cffbd.jpg",
          "https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/xiaomi-redmi-note-12-pro-tim.jpg.webp",
          "https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-12-pro-5g/m/db430fa7f2b7b7391b0e7a264b6b3b76.jpg"
        ],
        "description": "Xiaomi Redmi Note 12 Pro 5G",
        "content": "Xiaomi Redmi Note 12 Pro sở hữu cấu hình vượt trội gồm chip MediaTek Dimensity 1080, hệ thống ba camera với cảm biến chính 50MP và mạng 5G. Ngoài ra, màn hình Note 12 Pro 5G có kích thước khá lớn khoảng 6.67 inch, tấm nền AMOLED, tần số quét 120Hz khiến chiếc điện thoại nổi bật trong tầm giá dưới 8 triệu.",
        "price": "9.900.000",
        "colors": ["black", "yellow", "white"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index => {
    this.setState({ index: index })
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {
          products.map(item => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>đ{item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />

                <a href="#" target="_blank">
                  <button className="cart">Thêm vào giỏ hàng</button>
                </a>

                <a href="#" target="_blank">
                  <button className="buy"> Mua ngay </button>
                </a>

                <a href="Order" target="_blank">
                  <button className ="buy"> Đặt hàng </button>
                </a>
              </div>


              <div>
                <div >
                  <h2>Thông số kỹ thuật:</h2>
                </div>
                <table>
                  <tr>
                    <td>Kích thước màn hình</td>
                    <td>6.67 inches</td>
                  </tr>
                  <tr>
                    <td>Công nghệ màn hình</td>
                    <td>AMOLED</td>
                  </tr>
                  <tr>
                    <td>Dung lượng RAM</td>
                    <td>8 GB</td>
                  </tr>
                  <tr>
                    <td>Bộ nhớ trong</td>
                    <td>256 GB</td>
                  </tr>
                  <tr>
                    <td>Thẻ SIM</td>
                    <td> 2 Nano SIM</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td> Android 12</td>
                  </tr>
                  <tr>
                    <td>Chipset</td>
                    <td>MediaTek Dimensity 1080 8 nhân</td>
                  </tr>
                  <tr>
                    <td>Mạng di động</td>
                    <td>Hỗ trợ 4G</td>
                  </tr>
                  <tr>
                    <td>Dung lượng pin</td>
                    <td>5000 mAh</td>
                  </tr>
                </table>
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}


export default SP1;
