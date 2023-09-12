import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  // console.log(explorerData);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <h1>📘File Explorer</h1>
      <hr />
      <div style={{ paddingTop: 10 }}>
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
    </div>
  );
}
