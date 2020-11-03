import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        {" "}
        {/*fragments: uma div invisível */}
        <Header />
        <Board />
        <GlobalStyle />
      </DndProvider>
    </div>
  );
}

export default App;
