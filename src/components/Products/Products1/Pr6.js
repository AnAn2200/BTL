import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';

class SP1 extends React.Component{
  
  state = {
    products: [
      {
        "_id": "1",
        "title": "Vivo Y21S",
        "src": [
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/15/image-removebg-preview-35.png",
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/15/image-removebg-preview-34.png",
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/15/image-removebg-preview-39.png",
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/15/image-removebg-preview-36.png"
          ],
        "description": "Vivo Y21S",
        "content": "Những năm gần đây, dòng sản phẩm Y-series của nhà Vivo đang được rất nhiều người dùng tại Việt Nam yêu thích. Năm nay, công ty giới thiệu dòng sản phẩm Vivo Y21s với những cải tiến mới, hứa hẹn sẽ mang đến trải nghiệm hoàn thiện hơn",
        "price": "49.900.000",
        "colors":["black","yellow","white"],
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
                   <td>6.51 inches</td>  
                 </tr>
                 <tr>
                   <td>Công nghệ màn hình</td>
                   <td>IPS LCD</td>
                 </tr>                  
                 <tr>
                   <td>Dung lượng RAM</td>
                   <td>4 GB</td>
                 </tr>
                 <tr>
                   <td>Bộ nhớ trong</td>
                   <td>128 GB</td>
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
                   <td>MediaTek Helio P35 8 nhân</td>
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
