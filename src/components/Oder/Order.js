import React from 'react'
import { TableContain, Contain} from './OrderElement';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Btn } from './Btn';


const Order = () => {
  return (
    <Contain>
      <Navbar />
    <TableContain>
        <h3>Đơn đặt hàng</h3>
        <tr>
        <td>Tên người nhận: </td>
        <td><input type='text' name='name' /></td>
        </tr>
        <tr>
        <td>Số điện thoại: </td>
        <td><input type='number' name='phone' /></td>
        </tr>
        <tr>
        <td>Email: </td>
        <td><input type='email' name='email' /></td>
        </tr>
        <tr>
        <td>Địa chỉ: </td>
        <td> <input type='text' name='address' /></td>
        </tr>
        <tr>
        <td>Ghi chú: </td>
        <td><input type='textarea' name='textarea'/></td>
        </tr>
        <tr>
          <td>Chọn phương thức thanh toán: </td>
          <td>
            <select>
              <option value=""></option>
              <option value="ATM">Thẻ ngân hàng</option>
              <option value="cash">Tiền mặt</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><Btn>Đặt hàng</Btn></td>
          <td><Btn>Hủy</Btn></td>
        </tr>
    </TableContain>
    <Footer />
    </Contain>
  )
}


export default Order;
