import { Menu } from 'antd';
import Link from 'next/link';
import {
  AppstoreAddOutlined,
  LoginOutlined,
  UserAddOutlined
} from '@ant-design/icons';

const { Item } = Menu;

const TopNav = () => {
  return(
    <Menu mode="horizontal">
      <Item icon={<AppstoreAddOutlined />}>
        <Link href="/">
          <a className="">App</a>
        </Link>
      </Item>
      <Item icon={<LoginOutlined />}>
        <Link href="/login">
          <a className="">Login</a>
        </Link>
      </Item>
      <Item icon={<UserAddOutlined />}>
        <Link href="/register">
          <a className="">Register</a>
        </Link>
      </Item>
    </Menu>
  )
};

export default TopNav;