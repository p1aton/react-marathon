import logo from './logo.svg';
import './App.css';
import s from './components/HeaderBlock/style.module.css';
import HeaderBlock from './components/HeaderBlock';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';

/* 
*Вывод всех компонентов
*/

const App = () => {
  return (
    <>
      <HeaderBlock 
      title = 'Учите слова онлайн'
      descr = 'Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов'
      >
      <h1>Test childe</h1>
      </HeaderBlock>

      <ContentBlock 
      title = 'Учите слова онлайн'
      hideBackground
      content = 'ContentBlock должен содержать заголовок и абзац текста, цвет фона однотонный, например, белый.'
      />

      <FooterBlock 
      title = 'THANKS FOR VISITING'
      copyright = '© 2021 #ReactMarathon.'
      />
      
    </>
    );
}

export default App;
