import { createRoot } from 'react-dom/client'
import FrameworkList from "./FrameworkList";
import './tailwind.css'
import FrameworkListSearch from './FrameworkListSearch';
import Real from './ResponsiveDesign';

createRoot(document.getElementById("root"))
.render(
    <div>
        {/* <FrameworkList/> */}
        <FrameworkListSearch/>
        {/* <Real/> */}

    </div>
)