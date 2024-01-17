import React, { useState } from 'react';
import "../index.css"

const FolderDropdown = () => {
  const [openFolder, setOpenFolder] = useState(null);

  const folders = {
    'BULL_FIGHTING_2022': ['000016630002.jpg', '000016630003.jpg', '000016630009.jpg'],
    'GUNS_2019': [
        '000040000002.jpg',
        '000040000009.jpg',
      ],
      'JOSHUA_TREE_2021': [
        '00000287010.jpg',
        '00000499700.jpg',
        '00000675307.jpg',
        '00000900616.jpg',
        '000006780100.jpg',
        '000040066900.jpg',
        '000048002654.jpg',
      ],
      'LIGHT_2021_23': [
        '000008170010.jpg',
        '000008170033.jpg',
        '000008790008.jpg',
        '000008790015.jpg',
        '000008790030.jpg',
        '000008790036.jpg',
        '000016630016.jpg',
      ],
      'OCEAN_2019_22': [
        '000003450005.jpg',
        '000013780003.jpg',
        '000047920002.jpg',
        '000047920004.jpg',
        '000047920004.jpg',
        '000047920007.jpg',
      ],
      'OLD_MEN_2019': [
        '000034234231.jpg',
        '000039990011.jpg',
        '000039990025.jpg',
        '000048290025.jpg',
      ],
      'TAKING_MOMS_KEYS_2019': [
        '000048290013.jpg',
        '000048290021.jpg',
      ],
      'WEALTH_2021_22': [
        '000008790007.jpg',
        '000008790010.jpg',
        '000008790032.jpg',
        '000009330007.jpg',
        '000009330017.jpg',
        '000009330021.jpg',
      ],
  };

  const toggleDropdown = (folderName) => {
    if (openFolder === folderName) {
      setOpenFolder(null);
    } else {
      setOpenFolder(folderName);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto hide-scrollbar">
      {Object.keys(folders).map((folderName) => (
        <div key={folderName} className="flex flex-row mb-4 w-full items-center">
        <div className="flex flex-col">
        <button
            onClick={() => toggleDropdown(folderName)}
            className="flex flex-row p-2 rounded"
          >
            <img
              className="w-16 h-16 mb-2" // Adjust the size of the folder icon as needed
              src={`${process.env.PUBLIC_URL}/pageElements/folder_icon.png`}
              alt="Folder Icon"
            />
            <span className="text-center mt-5">{folderName}</span>
          </button>
          {openFolder === folderName && (
            <div className="flex flex-col bg-neutral-400 p-2 rounded">
              {folders[folderName].map((file, index) => (
                <a
                  key={index}
                  href={`${process.env.PUBLIC_URL}/jpeg_/${folderName}/${file}`}
                  className="p-1 hover:bg-neutral-300 rounded text-center"
                >
                  {file}
                </a>
              ))}
            </div>
          )}
        </div>
        </div>

      ))}
      <div className="pb-36">

      </div>
    </div>

  );
};

export default FolderDropdown;
