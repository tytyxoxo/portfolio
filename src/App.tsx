import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/Error";
import LayoutWrapper from "./layouts/LayoutWrapper";
import HappyBirthDay from "./pages/hbd/HappyBirthDay";
import Password from "./pages/hbd/Password";
import UnlockedGallery from "./pages/hbd/Unlocked";
import Message from "./pages/hbd/Message";

export default function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/happybirthday" element={<HappyBirthDay />} />
        <Route path="/happybirthday/password" element={<Password />} />
        <Route path="/happybirthday/unlocked" element={<UnlockedGallery />} />
        <Route path="/happybirthday/message" element={<Message />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </LayoutWrapper>
  );
}
