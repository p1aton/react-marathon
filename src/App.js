import logo from './logo.svg';
import './App.css';
import HeaderBlock from './components/HeaderBlock';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import CardList from './components/CardList';
import CardBlock from './components/CardBlock';
import { wordsList } from './wordsList'
import IconBlock from './components/IconBlock';
import { ClockCircleOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';
import s from '../src/components/IconBlock/style.module.css'


/* 
*Вывод всех компонентов
*/


const App = () => {
  return (
    <>
      <HeaderBlock >
        <Header>
          Время учить слова онлайн
      </Header>
        <Paragraph>
          Используйте карточки для запоминания и пополняйте активный словарный запас.
      </Paragraph>
      </HeaderBlock>

      <IconBlock
        title='Начать учить английский очень просто'
        hideBackground
        descr='Кликай по карточкам и узнавай новые слова, быстро и просто!'
      >
        <div className={s.wrapper}>
          <div class={s.block}>
            <div>
              <ClockCircleOutlined style={{ fontSize: '30px', color: '#08c' }} />
            </div>
            <h3>Блок 1</h3>
            <p>Иконка отображается шрифтом "Font Awesome"</p>
          </div>
          <div class={s.block}>
            <div>
              <HomeOutlined style={{ fontSize: '30px', color: '#08c' }} />
            </div>
            <h3>Блок 2</h3>
            <p>Иконка отображается графическим файлом</p>
          </div>
          <div>
            <div class={s.block}>
              <SmileOutlined style={{ fontSize: '30px', color: '#08c' }} />
            </div>
            <h3>Блок 3</h3>
            <p>Иконка отображается графическим файлом</p>
          </div>
        </div>

      </IconBlock>

      <CardBlock
        title='Начать учить английский очень просто'
        hideBackground
        descr='Кликай по карточкам и узнавай новые слова, быстро и просто!'
      >
        <CardList item={wordsList} />
      </CardBlock>


      <ContentBlock
        title='Учите слова онлайн'
        hideBackground
        content='ContentBlock должен содержать заголовок и абзац текста, цвет фона однотонный, например, белый.'
      />

      <FooterBlock
        title='THANKS FOR VISITING'
        copyright='© 2021 #ReactMarathon.'
      />

    </>
  );
}

export default App;
