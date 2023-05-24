import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';

class SP1 extends React.Component{
  
  state = {
    products: [
      {
        "_id": "4",
        "title": "Iphone 14 Pro Max",
        "src": [
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/_/x_m_25.png",
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/v/_/v_ng_18_1.png",
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_1_10.png",
            "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_19.png"
          ],
        "description": "Iphone 14 Pro Max",
        "content": "iPhone 14 Pro Max là mẫu flagship nổi bật nhất của Apple trong lần trở lại năm 2022 với nhiều cải tiến về công nghệ cũng như vẻ ngoài cao cấp, sang chảnh hợp với gu thẩm mỹ đại chúng. Những chiếc điện thoại đến từ nhà Táo Khuyết nhận được rất nhiều sự kỳ vọng của thị trường ngay từ khi chưa ra mắt. Vậy liệu những chiếc flagship đến từ công ty công nghệ hàng đầu thế giới này có làm bạn thất vọng? Cùng khám phá những điều thú vị về iPhone 14 Pro Max ở bài viết dưới đây nhé.",
        "price": "30.000.000",
        "colors":["black","yellow","silver","violet"],
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
                   <td>6.7 inches</td>  
                 </tr>
                 <tr>
                   <td>Công nghệ màn hình</td>
                   <td>Super Retina XDR OLED</td>
                 </tr>
                 <tr>
                   <td>Camera trước</td>
                   <td>12 MP, f/1.9, 23mm, PDAF</td>
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
                   <td> 2 Nano SIM</td>
                 </tr>
                 <tr>
                   <td>Hệ điều hành</td>
                   <td> IOS 16</td>
                 </tr>
                 <tr>
                   <td>Độ phân giải màn hình</td>
                   <td>2796 x 1290-pixel</td>
                 </tr>
                 <tr>
                   <td>Tính năng màn hình</td>
                   <td>120Hz, HDR</td>
                 </tr>
                 <tr>
                    <td>Dung lượng pin</td>
                    <td>4323 mAh</td>
                 </tr>
                 <tr>
                   <td>Chipset</td>
                   <td>Apple A16 Bionic 6 nhân</td>
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

export default SP1;