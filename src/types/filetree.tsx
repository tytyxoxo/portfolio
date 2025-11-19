export interface FileTreeItem {
  name: string;
  type: "folder" | "file";
  url: string;
  icon?: React.ComponentType;
  desc?: string;
  children?: FileTreeItem[];
  visible?: boolean;
}

export interface ChevronIconProps {
  isOpen: boolean;
}

export interface TreeNodeProps {
  item: FileTreeItem;
  onNavigate: (fileName: string) => void;
  setIsDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FileTreeProps {
  setIsDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
}
