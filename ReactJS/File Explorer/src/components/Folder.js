import { useState } from "react";
import "../styles.css";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();

    setExpand(true);

    setShowInput({
      visible: true,
      isFolder
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>📁➕</button>
            <button onClick={(e) => handleNewFolder(e, false)}>📄➕</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="input_container">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={(e) => onAddFolder(e)}
                className="input_container_input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            // return <span>{exp.name}</span>;
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;

// Simple implementation with no adding of data

// import { useState } from "react";
// import "../styles.css";

// function Folder({ explorer }) {
//   const [expand, setExpand] = useState(false);

//   if (explorer.isFolder) {
//     return (
//       <div style={{ marginTop: 5 }}>
//         <div className="folder" onClick={() => setExpand(!expand)}>
//           <span>📁 {explorer.name}</span>
//         </div>

//         <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
//           {explorer.items.map((exp) => {
//             // return <span>{exp.name}</span>;
//             return <Folder explorer={exp} key={exp.id} />;
//           })}
//         </div>
//       </div>
//     );
//   } else {
//     return <span className="file">📄 {explorer.name}</span>;
//   }
// }

// export default Folder;
