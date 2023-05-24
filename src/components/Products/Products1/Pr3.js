import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';

class SP3 extends React.Component{
  
  state = {
    products: [
      {
        "_id": "3",
        "title": "Iphone 14 256GB",
        "src": [
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/p/h/photo_2022-09-28_21-58-57_4.jpg",
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/p/h/photo_2022-09-28_21-58-56_3.jpg",
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/p/h/photo_2022-09-28_21-58-51_1_1.jpg"
          ],
        "description": "Iphone 14 256GB",
        "content": "iPhone 14 phiên bản 256GB chính hãng VN/A có thiết kế 6,1 inch phổ biến, có hệ thống camera kép mới, phát hiện sự cố, dịch vụ an toàn đầu tiên trong ngành điện thoại thông minh với SOS khẩn cấp qua vệ tinh và tuổi thọ pin tốt nhất trên iPhone. Hãy cùng tìm hiểu thông tin chi tiết về cấu hình iPhone 14 phiên bản 256GB trong phần nội dung dưới đây!",
        "price": "27.990.000",
        "colors":["black","violet","blue"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
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
                  <button className ="buy"> Mua ngay </button>
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
                   <td>6.1 inches</td>  
                 </tr>
                 <tr>
                   <td>Công nghệ màn hình</td>
                   <td>OLED</td>
                 </tr>
                 <tr>
                   <td>Camera sau</td>
                   <td>Camera góc rộng: 12MP</td>
                   <td>Camera góc siêu rộng: 12MP</td>
                 </tr>
                 <tr>
                   <td>Camera trước</td>
                   <td>12MP, ƒ/1.9</td>
                 </tr>
                 <tr>
                   <td>Dung lượng RAM</td>
                   <td>6 GB</td>
                 </tr>
                 <tr>
                   <td>Bộ nhớ trong</td>
                   <td>256 GB</td>
                 </tr>
                 <tr>
                   <td>Thẻ SIM</td>
                   <td>1 Nano SIM & 1 eSIM</td>
                 </tr>
                 <tr>
                   <td>Hệ điều hành</td>
                   <td>IOS 16</td>
                 </tr>
                 <tr>
                   <td>Pin</td>
                   <td>3279 mAh</td>
                 </tr>
                 <tr>
                   <td>Chipset</td>
                   <td>Apple A15 Bionic 6 nhân</td>
                 </tr>
                 <tr>
                   <td>Mạng di động</td>
                   <td>Hỗ trợ 5G</td>
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

export default SP3;