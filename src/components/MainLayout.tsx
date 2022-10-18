import React, { PropsWithChildren, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { getToken } from '../services/utils';

/** Лайаут меню */
const TopBar: React.FC = () => (
  <div className="flex align-middle justify-end p-5 drop-shadow-lg bg-bgDefault">
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

/** Лайаут блока с контентом */
const ContentLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 p-5 text-left border-r-2">
    {children}
  </div>
);

/** Основной лайаут */
const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/login');
    }
  }, []);

  return (
    <Layout>
      <TopBar />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </Layout>
  );
};
export default MainLayout;
