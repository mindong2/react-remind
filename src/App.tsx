import Router from "./Router";
import Global from "./style/Global";
import styled from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { lightTheme,darkTheme } from "./theme";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./recoil/theme";

const DarkBtn = styled.button`
position:absolute;
top:20px;
right:20px;
  color:${({theme}) => theme.bgColor};
  border : 1px solid ${({theme}) => theme.borderColor};
  background-color:${({theme}) => theme.textColor};
  outline:none;
  border-radius :50%;
  width:50px;
  height:50px;
  cursor:pointer;
  text-indent:-9999px;
  background:url(${({theme}) => theme.btnImg}) no-repeat;
  background-size:cover;
  background-position:center;
`

const App = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  // 아래 두 기능을 합친게 useRecoilState
  // const isDark = useRecoilValue(isDarkAtom) -> 읽고만 싶을때
  // const setIsDark = useSetRecoilState(isDarkAtom) -> 수정만 하고싶을때
  const changeMode = () => {
    setIsDark(prev => !prev)
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Global />
        <DarkBtn onClick={changeMode}>다크모드토글</DarkBtn>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
