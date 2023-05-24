import React from 'react';
import './App.css';
import Colors from '../Products1/Colors'
import DetailsThumb from '../Products1/DetailsThumb';


class SP1 extends React.Component{
  
  state = {
    products: [
      {
        "_id": "1",
        "title": "Xiaomi Redmi Note 11 pro 5G",
        "src": [
            "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/17/note-11-pro-5g-2.png",
            "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/17/note-11-pro-5g-5.png",
            "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/17/note-11-pro-5g-3.png",
            "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/17/note-11-pro-5g-4.png"
          ],
        "description": "Xiaomi Redmi Note 11 PRO 5G",
        "content": "Là một trong những chiếc điện thoại mới nhất của Redmi hiện nay với thiết kế hiện đại cùng nhiều tính năng cực đỉnh, Redmi Note 11 Pro 5G chắc chắn sẽ đem đến cho bạn hiệu năng cực đỉnh trong tầm giá.",
        "price": 6850000,
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
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />

                <a href="#" target="_blank">
                  <button className="cart">Thêm vào giỏ hàng</button>
                </a>
                
                <a href="Order" target="_blank">
                  <button className ="buy"> Mua ngay </button>
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
                   <td>AMOLED</td>
                 </tr>                  
                 <tr>
                   <td>Dung lượng RAM</td>
                   <td>8 GB</td>
                 </tr>
                 <tr>
                   <td>Bộ nhớ trong</td>
                   <td>128 GB</td>
                 </tr>
                 <tr>
                   <td>Thẻ SIM</td>
                   <td>2 SIM (Nano-SIM)</td>
                 </tr>
                 <tr>
                   <td>Hệ điều hành</td>
                   <td>Android 11, MIUI 12.5</td>
                 </tr>
                 <tr>
                   <td>Chipset</td>
                   <td>MediaTek Helio G96</td>
                 </tr>
                 <tr>
                   <td>Pin</td>
                   <td>Li-Po 5000 mAh, non-removable</td>
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
