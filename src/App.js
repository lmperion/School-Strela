import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Home } from './pages/HomePage/Home';
import { About } from './pages/AboutPage/About';
import { Contact } from './pages/Contact/Contact';
import { Course } from './pages/Courses/Course';

import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { WidgetInfo } from './components/Header/WidgetInfo/WidgetIfo'
import { useForm } from 'react-hook-form'; 



const coursers = {
  children:{
      title:"Детский курс",
      imgPromo:"https://static.tildacdn.com/tild3766-3136-4139-b934-653538373266/photo1682332195_4.jpeg",
      training: "Детские групповые занятия",
      text: "Для детей занятия в группе - прекрасная возможность социализации и роста физических показателей",
      positiveMoments: [
        {
          header:"Личный прогресс",
          text:"Формат групповых тренировок помогает детям раскрыть свой потенциал путем подражания - в более раннем возрасте, и через соревнование - в старшем",
        },
        {
          header:"Общение с тренером",
          text:"В рабочее время тренеру всегда можно задать вопросы, связанные с тренировками",
        },
        {
          header:"Индивидуальные особенности",
          text:"Наши тренеры не упускают из виду трудности или успехи каждого из детей и могут корректировать задания во время тренировки специально для них",
        },
      ]
  },
  adult:{
    title:"Взрослый курс",
    imgPromo:"https://static.tildacdn.com/tild6263-6638-4665-a164-383533333630/jesper-stechmann-nb2.jpg",
    training: "Взрослые групповые занятия",
    text: "Взрослым групповые тренировки помогают найти единомышленников для любительских стартов и поддержку, когда собственной мотивации недостаточно",
    positiveMoments: [
      {
        header:"Команда",
        text:"Если вы мечтали проплыть эстафету или просто поучаствовать в соревнованиях, то группа точно приблизит вас к этой мечте",
      },
      {
        header:"Связь",
        text:"Здесь вы можете быть на связи не только с тренером, который всегда готов обсудить любые вопросы, но и с одногруппниками :)",
      },
      {
        header:"Обучение",
        text:"На групповых тренировках можно улучшить не только собственные физические показатели, но и, в целом, быстрее выправить технику",
      },
    ],
    lessons: [
      {
        image:"",
        price:"",
        countLesson:"",
        countPeople:"",
        duration:"",
        title:"",
        text:"",
    }
    ]

  },
  personal:{
    title:"Персональный курс",
    imgPromo:"https://static.tildacdn.com/tild6431-3836-4238-b039-343732323334/julian-wan-jkS0b3Bpa.jpg",
    training: "Персональные занятия",
    text: "Персональные тренировки помогают проработать технику согласно своим индивидуальным особенностям",
    positiveMoments: [
      {
        header:"График",
        text:"Такие занятия позволяют встроить тренировки в уже существующий режим дня с максимальным комфортом",
      },
      {
        header:"Освоение техники",
        text:"Такие занятия позволяют встроить тренировки в уже существующий режим дня с максимальным комфортомпри регулярных индивидуальных занятиях есть возможность быстрее и качественнее проработать технику",
      },
      {
        header:"Фокус внимания",
        text:"Никто вас не подгоняет и по пяткам не шлепает, поэтому вы полностью сконцентрированы только на своих ощущениях",
      },
    ]

    
  }
}


function App() {

  const [scroll, setScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [block, setBlock] = useState("bg-first");
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 95);
    });
  }, []);

  useEffect(() => {
    const style = document.body.style
    
    if (isOpen) {
      style.overflow = "hidden";
    } else {
      style.overflow = "auto";
    }
  }, [isOpen]);

  const handleOpenWidget = (isOpen) => {
      setOpen(isOpen);
  };

  const handleChangeBackground = (block) => {
    setBlock(block)
  }

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm(); 
 
  const hSubmit = (data) => { 
     console.log("data", data)
  }; 



  return (
    <div className="App">
      <Header scroll={scroll} handleOpenWidget={handleOpenWidget}/>
      <WidgetInfo isOpen={isOpen} handleOpenWidget={handleOpenWidget}/>
      <Routes>
        <Route path='/' element={<Home block={block} handleChangeBackground={handleChangeBackground}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' 
          element={<Contact 
          register={register} 
          handleSubmit={handleSubmit} 
          hSubmit={hSubmit} 
          errors={errors}/>} />
        <Route path='/course/children' 
          element={<Course 
          course={coursers.children}  
          register={register} 
          handleSubmit={handleSubmit} 
          hSubmit={hSubmit} 
          errors={errors}/>}/>
        <Route path='/course/adult' 
          element={<Course course={coursers.adult}  
          register={register} 
          handleSubmit={handleSubmit} 
          hSubmit={hSubmit} 
          errors={errors}/>}/>
        <Route path='/course/personal' 
          element={<Course 
          course={coursers.personal} 
          register={register} 
          handleSubmit={handleSubmit} 
          hSubmit={hSubmit} 
          errors={errors}/>}/>

          {/* <HomePage /> */}
        {/* <Route>
          <ABoutPAge />
        </Route> */}
      </Routes>
      <Footer register={register} handleSubmit={handleSubmit} hSubmit={hSubmit} errors={errors}/>
    </div>
  );
}

export default App;
