import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

type Props = {
  func2: (id: string) => Promise<void>;
};

function Navigation(props:Props) {
  const { func2 } = props;

  return (
    <>
      <aside>
        <Categories
          funSearc={ func2 }
        />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;
