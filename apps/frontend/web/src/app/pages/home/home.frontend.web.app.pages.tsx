import { useContext } from 'react';
import { Notice } from '../../components';
import { DummyDataContext } from '../../context';
import {
  AnimatedHomeItemSt,
  HomeItemSt,
  HomeWrapperSt,
} from './home.frontend.web.app.pages.css';
import { useHomeAnimation } from './hooks';

export default function Home() {
  const {
    result,
    entities: { dummyData },
  } = useContext(DummyDataContext);

  const { transition } = useHomeAnimation<typeof result>({
    data: result,
  });

  return (
    <>
      <Notice />
      <HomeWrapperSt count={result.length}>
        {transition((style, id) => (
          <AnimatedHomeItemSt style={{ ...style }}>
            <HomeItemSt key={id} to={`/restaurants/${id}`}>
              {dummyData[id].name}
            </HomeItemSt>
          </AnimatedHomeItemSt>
        ))}
      </HomeWrapperSt>
    </>
  );
}
