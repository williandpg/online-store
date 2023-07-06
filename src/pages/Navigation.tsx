import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

type Props = {
  func: (id: string) => void;
  func2: () => Promise<void>;
};

function Navigation(props:Props) {
  const { func, func2 } = props;

  return (
    <>
      <aside>
        <Categories
          setId={ func }
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
