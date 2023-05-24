import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';

class SP1 extends React.Component{
  
  state = {
    products: [
      {
        "_id": "1",
        "title": "Iphone 13 256GB",
        "src": [
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-10.png",
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png",
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-13.png",
            "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-14.png"
          ],
        "description": "Iphone 13 256GB",
        "content": "Với những cải tiến không ngừng nghỉ cho những sản phẩm điện thoại thông minh của mình, Apple là hãng smartphone luôn nhận được sự tin tưởng từ người tiêu dùng Việt Nam. Dòng sản phẩm iPhone 13 được ra mắt gần đây với màu sắc mới và nâng cấp đáng kể về phần cứng của điện thoại đang nhận được rất nhiều sự quan tâm từ người hâm mộ.",
        "price": "22.900.000",
        "colors":["black","blue","white"],
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
                   <td>6.66 inches</td>  
                 </tr>
                 <tr>
                   <td>Công nghệ màn hình</td>
                   <td>OLED</td>
                 </tr>                  
                 <tr>
                   <td>Dung lượng RAM</td>
                   <td>4 GB</td>
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
                   <td> IOS 15</td>
                 </tr>
                 <tr>
                   <td>Chipset</td>
                   <td>Apple A15 Bionic 6 nhân</td>
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
