import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // react-router-dom 추가
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './pages/Intro/Intro'; // Intro 페이지 임포트
import BlogMain from './pages/Blog/BlogMain'; // BlogMain 페이지 추가
import BlogPost from './pages/Blog/BlogPost'; // BlogPost 페이지 추가
import BlogWrite from './pages/Blog/BlogWrite'; // BlogWrite 페이지 추가
import "./styles/common.css";

// Redux Store 사용
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <main className="min-h-screen bg-gray-100">
            <Routes>
              {/* /intro 경로에 Intro 컴포넌트를 연결 */}
              <Route path="/intro" element={<Intro />} />

              {/* 블로그 관련 라우트 */}
              <Route path="/blog" element={<BlogMain />} />
              <Route path="/board/post/:boardId" element={<BlogPost />} /> {/* Mock Data Test Route */}
              <Route path="/board/write" element={<BlogWrite />} />

              {/* 기본 경로 */}
              <Route path="/" element={<h1 className="text-3xl font-bold text-gray-800">메인 페이지</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
