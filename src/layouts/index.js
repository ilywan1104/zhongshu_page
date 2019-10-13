/*
 * @Description: 
 * @version: 1.0.0
 * @Author: Tony.Z
 * @Date: 2019-10-11 22:48:39
 * @LastEditors: Tony.Z
 * @LastEditTime: 2019-10-11 22:48:39
 */
import styles from './index.css';

function BasicLayout(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
