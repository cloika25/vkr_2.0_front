import React, { PropsWithChildren } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import Button from './Button';

/** Лайаут меню */
const TopBar: React.FC = () => (
  <div className="flex align-middle justify-between p-5 drop-shadow-lg bg-purple-500">
    <MenuIcon
      className="flex lg:invisible cursor-pointer"
      color="white"
      height={25}
    />
    <UserIcon
      className="cursor-pointer"
      color="white"
      height={25}
    />
  </div>
);

/** Внешний лайаут */
const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 flex-col bg-slate-50">
    {children}
  </div>
);

/** Внутренний лайаут (под боковое меню и контент) */
const InnerLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 ">
    {children}
  </div>
);

/** Лайаут бокового меню */
const MenuLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="hidden lg:block h-full w-64 bg-white p-5 text-left border-r-2">
    {children}
  </div>
);

/** Лайаут блока с контентом */
const ContentLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 p-5 text-left border-r-2">
    {children}
  </div>
);

/** Основной лайаут */
const MainLayout: React.FC = () => {
  const navigation = useNavigate();
  return (
    <Layout>
      <TopBar />
      <InnerLayout>
        <MenuLayout>
          <Button
            className="w-full"
            onClick={() => {
              navigation('/cars');
            }}
            title="Список"
          />
          <Button
            className="w-full mt-5"
            onClick={() => {
              navigation('/cars/1');
            }}
            title="Элемент списка"
          />
        </MenuLayout>
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </InnerLayout>
    </Layout>
  );
};
export default MainLayout;
