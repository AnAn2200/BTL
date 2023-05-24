import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';


class SP1 extends React.Component {

  state = {
    products: [
      {
        "_id": "1",
        "title": "Xiaomi Redmi 10A",
        "src": [
          "https://news.khangz.com/wp-content/uploads/2022/07/xiaomi-redmi-10a-co-gi-hap-dan-6.png",
          "https://thongsokythuat.vn/wp-content/uploads/Dien-thoai-Xiaomi-Redmi-10A-2022.png",
          "https://kinhtechungkhoan.vn/stores/news_dataimages/2023/022023/03/11/10a20230203112825.jpg?rt=20230203112837",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf0Z5Xb134xgkaVJwEoobPkQGAOakmOsrIw&usqp=CAU"
        ],
        "description": "Xiaomi Redmi 10A",
        "content": "Nằm trong phân khúc smartphone giá rẻ, điện thoại Xiaomi Redmi 10A vừa ra mắt mới đây được đánh giá cao bởi nhiều tính năng hữu ích cùng hiệu năng ổn định. Với người dùng sử dụng các tác vụ cơ bản như lướt web, nghe gọi, xem phim,… thì chiếc Xiaomi Redmi này là một trong những sự lựa chọn tối ưu. Tìm hiểu ngay thêm thông tin hữu ích dưới đây để đưa ra quyết định nên sở hữu smartphone đến từ nhà Xiaomi không nhé!",
        "price": "2.900.000",
        "colors": ["black", "blue", "white"],
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
                    <td>6.53 inches</td>
                  </tr>
                  <tr>
                    <td>Công nghệ màn hình</td>
                    <td>OLED</td>
                  </tr>
                  <tr>
                    <td>Dung lượng RAM</td>
                    <td>2 GB</td>
                  </tr>
                  <tr>
                    <td>Bộ nhớ trong</td>
                    <td>32 GB</td>
                  </tr>
                  <tr>
                    <td>Thẻ SIM</td>
                    <td>1 Nano SIM & 1 eSIM</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td> androi</td>
                  </tr>
                  <tr>
                    <td>Chipset</td>
                    <td>MediaTek Helio G25</td>
                  </tr>
                  <tr>
                    <td>Mạng di động</td>
                    <td>Hỗ trợ 5G, 4G</td>
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
