"use client";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import rawMenuData from "@/json/menu.json";
// --- Type Definitions ---
import type {
  FileTreeItem,
  ChevronIconProps,
  TreeNodeProps,
  FileTreeProps,
} from "@/types/filetree";

const fileTreeData = rawMenuData as FileTreeItem[];
// interface FileTreeItem {
//    name: string;
//    type: "folder" | "file" ;
//    url: string;
//    icon?: React.ComponentType;
//    children?: FileTreeItem[];
// }

// interface ChevronIconProps {
//    isOpen: boolean;
// }

// interface TreeNodeProps {
//    item: FileTreeItem;
//    onNavigate: (fileName: string) => void;
//    setIsDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface FileTreeProps {
//    setIsDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
// }

// --- SVG Icons ---
// Default and file-specific icons. A new React icon is added for demonstration.

// Example of a custom icon component

const ChevronIcon: React.FC<ChevronIconProps> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 shrink-0 ${
      isOpen ? "rotate-90" : ""
    }`}
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// --- New Data Structure ---
// This is the user-defined file structure.
// 'type' can be 'folder' or 'file'.
// 'icon' is an optional React component for a custom icon.
// const fileTreeData: FileTreeItem[] = [
//    {
//       name: "public",
//       type: "folder",
//       url: "/public",
//       children: [
//          { name: "home.html", type: "file", url: "/home" },
//          { name: "about.ico", type: "file", url: "/about" },
//       ],
//    },
//    {
//       name: "src",
//       type: "folder",
//       url: "/src",
//       children: [
//          {
//             name: "components",
//             type: "folder",
//             url: "/home/folder",
//             children: [
//                {
//                   name: "Button.jsx",
//                   type: "file",
//                   url: "/about/button",
//                }, // Custom icon
//                { name: "Modal.js", type: "file", url: "/about/modal" },
//             ],
//          },
//          {
//             name: "hooks",
//             type: "folder",
//             url: "/home/hooks",
//             children: [
//                { name: "useFetch.js", type: "file", url: "/home/usefetch" },
//             ],
//          },
//          { name: "App.jsx", type: "file", url: "/about/app" }, // Custom icon
//          { name: "index.js", type: "file", url: "/about/index" },
//          { name: "styles.css", type: "file", url: "/about/styles" },
//       ],
//    },
//    { name: "package.json", type: "file", url: "/about/package" },
//    { name: "README.md", type: "file", url: "/about/readme" },
// ];

// --- Icon Component ---
// This component decides which icon to render based on the data.
// const TreeIcon: React.FC<TreeIconProps> = ({ item, isOpen }) => {
//    if (item.icon) {
//       const IconComponent = item.icon;
//       return <IconComponent />;
//    }
//    if (item.type === "folder") {
//       return <FolderIcon isOpen={isOpen} />;
//    }
//    // Default file icons based on extension
//    if (item.name.endsWith(".js") || item.name.endsWith(".jsx"))
//       return <JsIcon />;
//    if (item.name.endsWith(".html")) return <HtmlIcon />;
//    if (item.name.endsWith(".css")) return <CssIcon />;

//    return <FileIcon />; // Generic file icon
// };

// --- TreeNode Component (previously FileTree) ---
// This is the recursive component that renders each node in the tree.

const TreeNode: React.FC<TreeNodeProps> = ({
  item,
  onNavigate,
  setIsDrawer,
}) => {
  const isFolder = item.type === "folder";
  // All folders are now open by default, but can still be toggled.
  const [isOpen, setIsOpen] = useState(isFolder);
  const location = useLocation();
  // console.log("menu ---> ", item, isFolder);
  // console.log(location?.split("/"));
  const navigate = useNavigate();
  const isSelected = !isFolder && location.pathname === item.url;

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      setIsDrawer?.(false);
      onNavigate(item?.url);
    }
  };

  return (
    <div className="text-gray-700 dark:text-gray-300 relative">
      <div
        className={`flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors duration-150 ${
          isSelected ? "font-bold text-black dark:text-white" : ""
        }`}
        onClick={handleToggle}
      >
        <div
          className={`flex items-center flex-grow py-[.5px] rounded-xl ${
            !isSelected ? "hover:bg-gray-100 dark:hover:bg-gray-800" : ""
          }`}
        >
          {isFolder ? (
            <ChevronIcon isOpen={isOpen} />
          ) : (
            <div className="w-4 shrink-0"></div>
          )}
          <div className="flex items-center ml-1 relative">
            {!isFolder && isSelected && (
              <div className="absolute left-[-19.5px] top-[5px] bottom-0 w-[10px] h-[10px] rounded-xl bg-red-500 dark:bg-red-400"></div>
            )}
            {/* <TreeIcon item={item} isOpen={isOpen} /> */}
            <span className="text-sm ml-1.5">{item.name}</span>
          </div>
        </div>
      </div>

      <div
        className={`pl-4 relative overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {/* Indentation Guide Line */}
        <div className="absolute left-[16px] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-800"></div>

        {isFolder &&
          isOpen &&
          item.children &&
          item.children.map((child: FileTreeItem) => (
            <TreeNode
              key={child.name}
              item={child}
              onNavigate={navigate}
              setIsDrawer={setIsDrawer}
            />
          ))}
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function FileTree({ setIsDrawer }: FileTreeProps) {
  // const handleFileSelect = (fileName: string) => {
  //    setSelectedFile(fileName);
  //    console.log(`Selected file: ${fileName}`);
  // };

  const navigate = useNavigate();
  const onNavigate = (path: string) => navigate(path);

  return (
    <div className="font-mono p-4 bg-white dark:bg-gray-900 rounded-lg">
      <div className="w-full max-w-xs">
        {fileTreeData
          .filter((item) => item.visible)
          .map((item) => (
            <TreeNode
              key={item.name}
              item={item}
              onNavigate={() => onNavigate(item?.url)}
              setIsDrawer={setIsDrawer}
            />
          ))}
      </div>
    </div>
  );
}
