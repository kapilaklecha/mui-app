
import { TreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Checkbox from '@mui/material/Checkbox';

const MenuComponent = () => {
    return (
        <div style={{ textAlign: 'left' }}>
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label={<><Checkbox /><span>Customer Service (2)</span></>}>
                    <TreeItem nodeId="2" label={<><Checkbox /><span>Support</span></>} />
                    <TreeItem nodeId="3" label={<><Checkbox /><span>Customer Success</span></>} />
                </TreeItem>
                <TreeItem nodeId="4" label={<><Checkbox /><span>Design (3)</span></>}>
                    <TreeItem nodeId="5" label={<><Checkbox /><span>Graphic Design</span></>} />
                    <TreeItem nodeId="6" label={<><Checkbox /><span>Product Design</span></>} />
                    <TreeItem nodeId="7" label={<><Checkbox /><span>Web Design</span></>} />
                </TreeItem>
            </TreeView>
        </div>
    );
};

export default MenuComponent;
